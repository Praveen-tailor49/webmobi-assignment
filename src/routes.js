import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Teams from './pages/Teams';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'event', element: <Dashboard /> },
      { path: 'teams', element: <Teams /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/teams" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
