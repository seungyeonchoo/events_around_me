import CurrTime from './components/CurrTime';
import CurrWeather from './components/CurrWeather';

const CurrentInfo = () => {
  return (
    <section className="flex mt-[0.5rem] mb-[1rem] justify-between">
      <CurrWeather />
      <CurrTime />
    </section>
  );
};

export default CurrentInfo;
