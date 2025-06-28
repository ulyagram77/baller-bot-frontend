import { decoration } from '@/assets/img';
import { Hero } from './hero';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <img
        className="absolute top-0 left-0 z-0 h-[1300px] w-full object-cover"
        src={decoration}
        alt="decoration"
      />
    </>
  );
};
