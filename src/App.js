import Movie from './Movie';
import './App.css';
import TamilMovie from './Tamilmovie';
import './Box.css';

function App() {
 
  return (
    <div className="container">
      <h2>Movies lists</h2>
         <Movie></Movie>
         <TamilMovie/>
    </div>

  );
}

export default App;
