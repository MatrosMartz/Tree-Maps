import { browser } from '$app/env';

export async function media() {
	if (browser) {
		const Devices = (await navigator.mediaDevices.enumerateDevices()).filter(
			device => device.kind === 'videoinput'
		);
		const stream = await navigator.mediaDevices.getUserMedia({
			video: { deviceId: Devices[0].deviceId },
		});

		return {
			Devices,
			stream,
		};
	}
}
