import type { LatLng, LeafletEvent } from 'leaflet';

export interface leafletClickEvent extends LeafletEvent {
	latlng: LatLng;
}
