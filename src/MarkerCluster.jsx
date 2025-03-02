import { useEffect } from "react";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useMap } from "react-leaflet";

const markerClusters = L.markerClusterGroup();

const createIcon = (hover) => L.divIcon({
	className: `${hover ? 'custom-fa-marker-hover' : 'custom-fa-marker'}`,
	html: `<i class="fa-solid fa-location-dot" />`
});

const MarkerCluster = ({ markers, hovered, setHovered, addMarkers }) => {
  const map = useMap()

  useEffect(() => {
    markerClusters.clearLayers();
    markers.forEach((position) => {
			const isIconHovered = hovered === position?.id
      return L.marker(new L.LatLng(position.lat, position.lng), {
        icon: createIcon(isIconHovered),
				riseOnHover: true,
				customId: position.id,
				riseOffset: true,
				bubblingMouseEvents: true
      }).addTo(markerClusters)
		}
    );

    map.addLayer(markerClusters);
  }, [markers, map, hovered]);

  map.on("moveend", () => {
    const start = window.performance.now();

    // addMarkers();
    const markersToAdd = [];
    markerClusters.clearLayers();
    markers.forEach((position) => {
			const isIconHovered = hovered === position?.id
      const markerToAdd = L.marker(new L.LatLng(position.lat, position.lng), {
        icon: createIcon(isIconHovered),
				riseOnHover: true,
				customId: position.id,
				riseOffset: true,
      });
			console.log('markerToAdd', markerToAdd)

      if (markerToAdd !== undefined) {
        markersToAdd.push(markerToAdd);
      }
    });

    markerClusters.addLayers(markersToAdd);
		markerClusters.on('mouseover', function (a) {
			console.log(a.propagatedFrom.options);
			createIcon(true);
			markerClusters.refreshClusters()
		});
		markerClusters.on('clustermouseover', function (a) {
			console.log(a);
			markerClusters.refreshClusters()
		});
		markerClusters.on('click', function (a) {
			console.log('marker ' + a.layer);
		});
		
		markerClusters.on('clusterclick', function (a) {
			// a.layer is actually a cluster
			console.log('cluster ' + a.propagatedFrom.getAllChildMarkers().length);
		});
    const end = window.performance.now();
    // console.log(`Time of adding markers and clusters: ${end - start}ms`);
  });

  return null;
};

export default MarkerCluster;
