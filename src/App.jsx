import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Movie from './routes/Movie';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
