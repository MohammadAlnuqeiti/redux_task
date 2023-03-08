import './App.css';
import Counter from './components/counter';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <Counter/>
     <hr></hr>

     <ToDoList/>
    </div>
  );
}

export default App;
