import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  LayerGroup,
} from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

const formatCurrency = (value) => {
  if (typeof value === 'string') value = parseInt(value, 10);
  if (isNaN(value)) return ''; // Handle invalid inputs

  if (value >= 1_000_000)
    return `${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1)}M €`;
  if (value >= 1_000)
    return `${(value / 1_000).toFixed(value % 1_000 === 0 ? 0 : 1)}k €`;

  return `${value} €`;
};
const createIcon = (hover) =>
  L.divIcon({
    className: `${hover ? 'custom-fa-marker-hover' : 'custom-fa-marker'}`,
    html: `<i class="fa-solid fa-location-dot" />`,
  });

function spreadMarkers(arr) {
  const spreadFactor = 0.003; // Adjust for more spacing
  const angleIncrement = 137.5; // Golden angle for better spread

  return arr.map((obj, index) => {
    if (obj.lat !== undefined && obj.lng !== undefined) {
      let angle = angleIncrement * index;
      let radius = spreadFactor * Math.sqrt(index); // Increase distance with index

      let latOffset = radius * Math.cos(angle * (Math.PI / 180)); // Convert to radians
      let lngOffset = radius * Math.sin(angle * (Math.PI / 180));

      return {
        ...obj,
        lat: obj.lat + latOffset,
        lng: obj.lng + lngOffset,
      };
    }
    return obj;
  });
}

export default function Map2(props) {
  const { data, singleMarker, hovered, setHovered } = props ?? {};
  const navigate = useNavigate();

  return (
    <MapContainer
      center={
        singleMarker ? [data?.[0]?.lat, data?.[0]?.lng] : [52.52, 13.455]
      }
      zoom={singleMarker ? 14 : 11.5}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LayerGroup>
        {spreadMarkers(data).map((el) => {
          const isIconHovered = hovered === el?.id;
          return (
            <Marker
              position={[parseFloat(el?.lat), parseFloat(el?.lng)]}
              icon={createIcon(isIconHovered)}
              eventHandlers={{
                mouseover: () => {
                  if (!singleMarker) setHovered(el.id);
                },
                mouseout: () => {
                  if (!singleMarker) setHovered(null);
                },
                click: () => {
                  if (!singleMarker) navigate(`/details/${el.id}`);
                },
              }}
              key={el?.id}
            >
              {!singleMarker && (
                <Tooltip
                  key={isIconHovered}
                  permanent={isIconHovered}
                  direction="top"
                  offset={[7, -10]}
                >
                  {formatCurrency(el.price?.value)}
                </Tooltip>
              )}
            </Marker>
          );
        })}
      </LayerGroup>
    </MapContainer>
  );
}
