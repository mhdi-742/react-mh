import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
function App() {
  return (
    <div className="App">
      <div className='nav'>
      <Navbar title="CountTxt"></Navbar>
      </div>
      <div className='ta container'>
      <TextArea></TextArea>
      </div>
    </div>
  );
}

export default App;
