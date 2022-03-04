import { useRoutes, Routes, Route, Navigate } from 'react-router-dom'
import Authorization from './components/Authorization/Authorization'
import MainPage from './components/MainPage/MainPage'
import CheckToken from './components/CheckToken/CheckToken'

function App() {

  const checkToken = useRoutes(CheckToken())

  return (<>
    {checkToken}
    <Routes>
      <Route path='/authorization' element={<Authorization />} />
      <Route path='/registration' element={<Authorization />} />
      <Route path="/" element={<Navigate replace to="/authorization" />} />
    </Routes>
    

  </>);
}

export default App;
