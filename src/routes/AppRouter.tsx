import { Navigate, Route, Routes } from 'react-router-dom';
import { useManageUrls } from '../hooks/useManageUrls';

import { LandingPage, FormNamesPage } from '../pages';

export const AppRouter: React.FC = () => {
  const { pathList } = useManageUrls();
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {
        pathList.map(pathname => <Route key={pathname} path={`/${pathname}`} element={<FormNamesPage />} />)
      }

      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}
