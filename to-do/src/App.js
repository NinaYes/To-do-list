import './App.css';
import image from './1.jpg';
import imageTwo from "./2.jpg"
import { MyList } from './MyList.js';


function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src={ image } width="200px" height="200px" alt="to-do list"/>
      </div>
      <div className='container'>
        <h1>To-do list</h1>
      </div>
      <MyList/>
      <div className='container'>
        <img src={ imageTwo } width="200px" height="150px" alt="to-do list 2"/>
      </div>
    </div>
  );
}

export default App;
