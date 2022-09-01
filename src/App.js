import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import DragDropFiles from './DragDropFiles';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/create' element={<DragDropFiles />}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
