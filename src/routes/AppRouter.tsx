import { Navigate, Route, Routes } from 'react-router-dom';

import { LandingPage } from '../pages/LandingPage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}
