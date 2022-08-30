import './App.css';
import Header from './header';
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SideBarnew from './SideBarnew';
import Login from './Login';
function App() {
  return (
   <>
   <BrowserRouter>
   <Header />
   <SideBarnew/>
   <Routes>
    <Route path='/' element={<Table />}/>
    {/* <Route path='/login' element={<Login />}/> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
