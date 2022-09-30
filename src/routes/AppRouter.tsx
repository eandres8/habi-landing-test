import { Navigate, Route, Routes } from 'react-router-dom';

import { LandingPage, FormNamesPage } from '../pages';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/names" element={<FormNamesPage />} />

      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}
