import useGetLocation from '@/src/lib/hooks/useGetLocation';

const CurrWeather = () => {
  const { location } = useGetLocation();

  return <section className="w-[48%] h-[7rem] bg-primary_weak rounded-[0.75rem]">{}</section>;
};

export default CurrWeather;
