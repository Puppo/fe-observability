import { NavBar } from '@fe-observability/ui';
import React from 'react';
import {
  createHashRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Show = React.lazy(() => import('./pages/Show'));
const Episode = React.lazy(() => import('./pages/Episode'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <React.Suspense>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: '/shows/:showId',
    element: (
      <>
        <NavBar />
        <React.Suspense>
          <Show />
        </React.Suspense>
      </>
    ),
  },
  {
    path: '/shows/:showId/episodes/:episodeId',
    element: (
      <>
        <NavBar />
        <React.Suspense>
          <Episode />
        </React.Suspense>
      </>
    ),
  },
];

const router = createHashRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
