import logo from './logo.svg';
import './App.css';
import { CourseContextProvider } from './Context/courseContext';
import { Course } from './Components/Course';
import { Routes,Route } from 'react-router-dom';
import { ShopingCar } from './Components/ShopingCar';

function App() {
  return (
    <Routes>
      <Route exat path="/" element={<Course/>} />
      <Route exat path="/cart" element={<ShopingCar/>} />
    </Routes>
  
  );
}

export default App;
