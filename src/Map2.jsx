import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import abc from './data2.json';
import "leaflet/dist/leaflet.css";
import "./App.css";

const formatCurrency = (value) => {
  if (typeof value === "string") value = parseInt(value, 10);
  if (isNaN(value)) return ''; // Handle invalid inputs

  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1)}M €`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(value % 1_000 === 0 ? 0 : 1)}k €`;

  return `${value} €`;
};
const createIcon = (hover) => L.divIcon({
  className: `${hover ? 'custom-fa-marker-hover' : 'custom-fa-marker'}`,
  html: `<i class="fa-solid fa-location-dot" />`
});

// const findUniqueAndRepetitiveValues = (arr, key) => {
//   const countMap = new Map();

//   // Count occurrences of each value
//   arr.forEach(item => {
//     countMap.set(item[key], (countMap.get(item[key]) || 0) + 1);
//   });

//   // Extract values: either appearing once or appearing multiple times (only once in output)
//   return [...countMap.keys()];
// };
export default function Map2(props) {
  const { data, centerFromData, hovered, setHovered } = props ?? {};
  const navigate = useNavigate();

  return (
    <MapContainer center={centerFromData ? [data?.[0]?.lat, data?.[0]?.lng] : [52.52, 13.405]} zoom={centerFromData ? 14 : 12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <MarkerClusterGroup
      showCoverageOnHover={false}
      // maxClusterRadius={0}
      // spiderfyOnMaxZoom={true}
      // removeOutsideVisibleBounds={true}
    
      > */}
        {abc.map((el) => {
          const isIconHovered = hovered === el?.id
          return(
          <Marker
            position={[parseFloat(el?.lat.toFixed(2)), parseFloat(el?.lng.toFixed(2))]}
            icon={createIcon(isIconHovered)}
            eventHandlers={{
              mousemove: () => {
              },
              mouseover: () => {
                console.log('adir mouse over');
              if (!centerFromData) setHovered(el.id)
              },
              mouseout: () => {
                console.log('adir mouse out');
                if (!centerFromData) setHovered(null)
              },
              click: () => {
                if (!centerFromData) navigate(`/details/${el.id}`)
              }
            }}
            key={el?.id}
          >
            {!centerFromData && (
              <Tooltip key={isIconHovered} permanent={isIconHovered} direction="top" offset={[7, -10]}>
                {formatCurrency(el.price?.value)}
              </Tooltip> 
            )}
          </Marker>
        )})}
        {/* </MarkerClusterGroup> */}
    </MapContainer>
  );
}