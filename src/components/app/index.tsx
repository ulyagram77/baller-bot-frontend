import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { ROUTES } from '@/core/constants';
import { Header } from '../header';

const HomePage = lazy(() => import('@/pages/home'));
const AboutPage = lazy(() => import('@/pages/about'));
const FeaturesPage = lazy(() => import('@/pages/features'));
const NotFoundPage = lazy(() => import('@/pages/not-found'));

const App = () => {
  return (
    <>
      <Header className="z-10" />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.FEATURES} element={<FeaturesPage />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
export default App;
