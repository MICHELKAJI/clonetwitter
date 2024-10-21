import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Profil from './pages/profile.jsx';
import Login from './login/Login.jsx'
import('./style/reset.css');
import('./style/App.css');
import('/src/index.css')

  function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
       <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/profile' element ={<Profil/>}/>
    </Routes>
    </Layout>
    </BrowserRouter>
    </>
   
  );
}
export default App
