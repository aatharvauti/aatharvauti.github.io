import logo from './logo.svg';
import './App.css';

function App() {
  if (window.location.href !== 'https://cyhex.co') {
    window.location.href = 'https://cyhex.co';
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
