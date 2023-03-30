import ViewPrincipal from './view/ViewPrincipal.jsx';
import ViewAdmin from'./view/admin/ViewAdmin.jsx';
import ViewAdminAprendiz from'./view/admin/ViewAminAprendiz.jsx';
//componentes
import CompCreateUser from './view/admin/compUser/CreateUser.jsx';
import CompEditUser from './view/admin/compUser/EditUser.jsx';
import Login from './view/Login.jsx';
import Registro from './view/Registro.jsx'

//import router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    // <div>
    //   <Index/>
    // </div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ViewPrincipal></ViewPrincipal>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registro' element={<Registro></Registro>}></Route>
        <Route path='/admin' element={<ViewAdmin/>}></Route>
        <Route path='/admin/aprendiz' element={<ViewAdminAprendiz/>}></Route>
        <Route path='/admin/aprendiz/create' element={<CompCreateUser/>}></Route>
        <Route path='/admin/aprendiz/edit/:id' element={<CompEditUser/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App;
