// libraries
import {
  MapContainer as LeafletMapContainer,
  TileLayer as LeafletTileLayer,
  Marker as LeafletMarker,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';

// styles
import 'leaflet/dist/leaflet.css';
import './style.scss';

const icon = L.icon({
  iconUrl: '/assets/images/marker.svg',
  iconSize: [40, 40],
  shadowUrl: '/assets/images/marker-shadow.svg',
  shadowSize: [44, 48],
  shadowAnchor: [22, 22],
});

export const MapContainer = LeafletMapContainer;

export const TileLayer = LeafletTileLayer;

export const Marker = (props) => <LeafletMarker {...props} icon={icon} />;

export { useMap, useMapEvents };
