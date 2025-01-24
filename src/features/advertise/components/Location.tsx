// libraries
import { useEffect, useRef, useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';

// components
import { MapContainer, TileLayer, Marker } from '@/components/Map';
import { Button } from '@/components/Button';

const Location = () => {
  const [position, setPosition] = useState([35.6998803531293, 51.340535538424206]);
  const [mapIsLoaded, setMapIsLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapIsLoaded) setMapIsLoaded(true);
  }, [mapRef?.current]);

  return (
    <div className="relative flex h-64 w-full flex-col items-start justify-start gap-8">
      {mapIsLoaded && (
        <Button
          color="default"
          variant="solid"
          size="sm"
          isIconOnly
          className="absolute left-4 top-4 z-20"
          onPress={() => mapRef?.current?.target?.zoomIn()}
        >
          <LuPlus size={20} />
        </Button>
      )}

      {mapIsLoaded && (
        <Button
          color="default"
          variant="solid"
          size="sm"
          isIconOnly
          className="absolute left-4 top-14 z-20"
          onPress={() => mapRef?.current?.target?.zoomOut()}
        >
          <LuMinus size={20} />
        </Button>
      )}

      <MapContainer
        whenReady={(el) => (mapRef.current = el)}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="z-10 h-full w-full rounded-lg"
      >
        <TileLayer
          minZoom={13}
          maxZoom={20}
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};

export default Location;
