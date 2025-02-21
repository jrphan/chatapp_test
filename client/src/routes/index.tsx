import routes from './routes';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingPage from '../components/common/Loading/LoadingPage';

// Layouts
const Layout = lazy(() => import('../layouts/Layout'));

// Pages
const LoginPage = lazy(() => import('../pages/LoginPage'));

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const router = createBrowserRouter([
  {
    path: routes.login,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: routes.home,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: routes.about,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: routes.notFound,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
