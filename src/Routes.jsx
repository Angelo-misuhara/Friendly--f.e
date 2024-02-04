import { Route, Routes } from 'react-router-dom'
import AuthPage from './Pages/AuthPage'
import Profile from './Pages/Profile'
import Content from './Pages/Content'
import PersonMessage from './Pages/PersonMessage'






const AppRoutes = () => {
 return (
  <Routes>
   <Route path='/Message' element={<AuthPage />} />
   <Route path='/Profile' element={<Profile />} />
   <Route path='/Content' element={<Content />} />
   <Route path='/' element={<PersonMessage />} />
  </Routes>
 )
}

export default AppRoutes