import { Route, Routes } from 'react-router';
import { AboutPage } from '@/pages/about';
import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/not-found';
import { Header } from '../header';

const App = () => {
  return (
    <>
      <Header className="z-10" />
      <main>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};
export default App;
