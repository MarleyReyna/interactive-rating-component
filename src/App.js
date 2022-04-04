import { useState } from 'react';
import './App.css';
import Rating from './Rating/Rating';
import Thanks from './Thanks/Thanks'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [ratingValue, setRatingValue] = useState('');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Rating ratingValue={ratingValue}
          setRatingValue={setRatingValue}/>}/>
          <Route exact path='/thanks' element={<Thanks ratingValue={ratingValue}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
