import logo from './logo.svg';
import Slides from './components/Slider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Slides slides={[{ title: "heading 1", text: "this is title 1" }, { title: "heading 2", text: "this is title 2" }, { title: "heading 3", text: "this is title 3" }]} />
    </div>
  );
}

export default App;
