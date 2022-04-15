import 'antd/dist/antd.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HasilPencarian from './pages/HasilPencarian';
import Detail from './pages/Detail';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hasil" element={<HasilPencarian />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
