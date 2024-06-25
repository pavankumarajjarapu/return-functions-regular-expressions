import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import MyMarks from './Components/MyMarks';

function App() {
  return (
    <div className="App page">
      <LoginPage></LoginPage>
      <MyMarks></MyMarks>
    </div>
  );
}

export default App;
