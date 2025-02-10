// libraries
import { useEffect, useRef, useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';

// components
import { MapContainer, TileLayer, Marker, useMapEvents } from '@shared/components/Map';
import { Button } from '@shared/components/Button';

const LocationPicker = ({ name, label, isRequired, value, onChange }) => {
  const [position, setPosition] = useState([35.6998803531293, 51.340535538424206]);
  const [mapIsLoaded, setMapIsLoaded] = useState(false);
  const mapRef = useRef(null);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        onChange([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  useEffect(() => {
    if (!mapIsLoaded) setMapIsLoaded(true);
  }, [mapRef?.current]);

  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <label htmlFor={name} className="flex items-center justify-start gap-1 text-sm text-default-foreground">
        {label}
        {isRequired && <span className="text-danger">*</span>}
      </label>

      <div className="relative flex h-80 w-full flex-col items-start justify-start gap-8">
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
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler />
          {value && <Marker position={value} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationPicker;
