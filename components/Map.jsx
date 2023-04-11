import { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from 'geolib';
import { MapPinIcon } from '@heroicons/react/24/solid';

const Map = ({ searchResults }) => {

  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.longitude,
    latitude: result.latitude,
  }));

 

  let center = getCenter(coordinates);

  useEffect(() => {
    setViewport({
      width: '100%',
      height: '100%',
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 12,
    });
  }, [searchResults]);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/tom2207/clfjct72v000d01l5c8nlnazv"
      mapboxAccessToken="pk.eyJ1IjoidG9tMjIwNyIsImEiOiJjbGZqY2w2NmowZjVzNDNtYmIzNHo4dnhpIn0.au4DalP6j1a-2bZu1wfQ9w"
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.longitude}
            latitude={result.latitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              role="img"
            >
              <MapPinIcon className="h-10 w-10 text-neutral-700" />
            </p>
          </Marker>
          

          {selectedLocation.longitude === result.longitude ? (
            <Popup
              latitude={result.latitude}
              longitude={result.longitude}
              closeOnClick={false}
            >
              <img src={result.main_photo_url} alt="" className="rounded-lg" />
              <div className="flex flex-col">
                <div className="text-[15px] font-semibold">
                  {result.hotel_name.length < 20 ? (
                    <>{result.hotel_name}</>
                  ) : (
                    <>{result.hotel_name.substring(0, 20)}...</>
                  )}
                </div>
                <div className="text-lg">
                  {result.price_breakdown.gross_price}
                </div>
              </div>
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
