<script lang="ts">
	import files from '../../stores/images';
	import { onMount } from 'svelte';

	export let Devices: MediaDeviceInfo[], stream: MediaStream;

	let deviceId: string;
	let videoThis: HTMLVideoElement;

	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');

	async function onInput() {
		try {
			const newStream = await navigator.mediaDevices.getUserMedia({
				video: {
					deviceId,
				},
			});
			stream = newStream;
			videoThis.srcObject = stream;
			videoThis.play();
		} catch (err) {
			alert(err);
		}
	}

	function onClick() {
		videoThis.pause();

		canvas.width = videoThis.videoWidth;
		canvas.height = videoThis.videoHeight;
		context.drawImage(videoThis, 0, 0);

		canvas.toBlob((blob: File) => {
			files.add([blob]);
		}, 'image/webp');

		videoThis.play();
	}

	onMount(() => {
		videoThis.srcObject = stream;
		videoThis.play();
	});
</script>

<div>
	<video bind:this={videoThis} muted />
	<section class="buttons">
		<select
			name="device"
			id="device"
			on:change={onInput}
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
	</section>
</div>

<style>
	div {
		width: 100%;
	}
	video {
		height: 10em;

		border-radius: 7px;
	}
	.buttons {
		display: flex;
		justify-content: space-evenly;
	}
	.buttons > select {
		width: 60%;
		height: 2.5em;
	}
	.buttons > button {
		height: 2.5em;
	}
</style>
