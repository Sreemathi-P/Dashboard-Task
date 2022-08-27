import './App.css';
import Header from './header';
import SideBar from './SideBar';
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
   <Header />
   <SideBar/>
   <Routes>
    <Route path='/' element={<Table />}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
