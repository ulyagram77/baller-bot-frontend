import { Route, Routes } from 'react-router';
import { ROUTES } from '@/core/constants';
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
          <Route index path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};
export default App;
