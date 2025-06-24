import { decoration } from '@/assets/img';
import { Features } from '../features';
import { Footer } from '../footer';
import { Header } from '../header';
import { Hero } from '../hero';

const App = () => {
  return (
    <>
      <Header className="z-10" />
      <main className="z-10">
        <Hero />
        <Features />
      </main>
      <Footer />
      <img
        className="absolute top-0 left-0 z-0 h-[1300px] w-full object-cover"
        src={decoration}
        alt="decoration"
      />
    </>
  );
};
export default App;
