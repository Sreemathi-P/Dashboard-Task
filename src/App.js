import './App.css';
import Header from './header';
import SideBar from './SideBar';
import Table from './Table';
import DynamicTable from './DynamicTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
   <>
   {/* <div>
    <Header />
    <div className='row'>
      <div className='col-lg-4'>
        <SideBar />
      </div>
      <div className='col-lg-8'>
        <Table />
      </div>
    </div>
   </div> */}
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
