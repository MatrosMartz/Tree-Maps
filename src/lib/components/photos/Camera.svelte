<script lang="ts">
	import { browser } from '$app/env';

	let deviceId: string;
	let videoThis: HTMLVideoElement;

	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');

	async function media() {
		try {
			if (browser) {
				const Devices = (await navigator.mediaDevices.enumerateDevices()).filter(
					device => device.kind === 'videoinput'
				);
				const stream = await navigator.mediaDevices.getUserMedia({
					video: { deviceId: Devices[0].deviceId },
				});

				videoThis.srcObject = stream;
				videoThis.play();

				return {
					Devices,
				};
			}
		} catch (err) {
			console.error(err);
		}
	}
	async function onInput() {
		const stream = await navigator.mediaDevices.getDisplayMedia({ video: { deviceId } });
		videoThis.srcObject = stream;
		videoThis.play();
	}

	function onClick() {
		videoThis.pause();

		canvas.width = videoThis.videoWidth;
		canvas.height = videoThis.videoHeight;
		context.drawImage(videoThis, 0, 0);

		const photo = canvas.toDataURL();

		videoThis.play();
	}
</script>

<div>
	<video bind:this={videoThis} muted />
	{#await media()}
		<p>esperando...</p>
	{:then { Devices }}
		<select
			name="device"
			id="device"
			on:input={onInput}
			bind:value={deviceId}
			disabled={Devices.length < 2}
		>
			{#each Devices as Device}
				<option value={Device.deviceId}>{Device.label}</option>
			{:else}
				<option value="#">no hay ni un dispositivo</option>
			{/each}
		</select>
		<button on:click={onClick} type="button">tomar foto</button>
	{:catch error}
		{error}
	{/await}
</div>

<style>
	div {
		width: 100%;
	}
	video {
		width: 100%;

		border-radius: 7px;
	}
</style>
