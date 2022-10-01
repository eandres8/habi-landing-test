import { Navigate, Route, Routes } from 'react-router-dom';
import { useManageUrls } from '../hooks/useManageUrls';

import { LandingPage, FormNamesPage, FormEmailPage } from '../pages';

export const AppRouter: React.FC = () => {
  const { pathList } = useManageUrls();
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path={`/${pathList[0]}`} element={<FormNamesPage />} />
      <Route path={`/${pathList[1]}`} element={<FormEmailPage />} />

      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}
