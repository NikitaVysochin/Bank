import { Navigate } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

const Check = () => [
  {
    path: "/MainPage",
    element: localStorage.getItem("jwtToken") ? (
      <>
        <MainPage />
      </>
    ) : (
      <Navigate to="/authorization" />
    ),
  },
];

export default Check;