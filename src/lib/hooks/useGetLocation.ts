import { useEffect, useState } from 'react';

interface ILocation {
  latitude: number;
  longitude: number;
}

const useGetLocation = () => {
  const [location, setLocation] = useState<ILocation>();

  useEffect(() => {
    const { geolocation } = navigator;

    const handleSuccess = (data: any) => {
      const { latitude, longitude } = data.coords;

      const currLocation = { latitude, longitude };

      setLocation(currLocation);
    };

    const handleError = () => {
      setLocation({
        latitude: 37.57037778,
        longitude: 126.9816417,
      });
    };

    geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location };
};

export default useGetLocation;
