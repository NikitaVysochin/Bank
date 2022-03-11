import { useRoutes, Routes, Route, Navigate } from 'react-router-dom'
import Authorization from './components/Authorization/Authorization'
import CheckToken from './components/CheckToken/CheckToken'
import MainPageHeader from './components/MainPage/MainPageHeader/MainPageHeader'
import CreateCard from './components/MainPage/CreateCard/FormCreateCard'
import PayCards from './components/MainPage/PayCards/PayCards'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const checkToken = useRoutes(CheckToken())

  return (<>
    {checkToken}
    <Routes>
      <Route path='/authorization' element={<Authorization />} />
      <Route path='/registration' element={<Authorization />} />
      <Route 
        path={`/createCard`} 
        element={<>
          <MainPageHeader />
          <CreateCard />
        </>} 
      />
      <Route 
        path={`/payCards`} 
        element={<>
          <MainPageHeader />
          <PayCards />
        </>} 
      />
      <Route path="/" element={<Navigate replace to="/authorization" />} />
    </Routes>
    <Toaster />
  </>);
}

export default App;
