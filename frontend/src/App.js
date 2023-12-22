import {useNavigate} from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();



  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Website</h1>

        <button 
        className='users-button1' 
        onClick={() => navigate('/users')}>
          Users
          </button>

          <button 
        className='users-button2' 
        onClick={() => navigate('/users')}>
          Users
          </button>

          <button 
        className='users-button3' 
        onClick={() => navigate('/users')}>
          Users
          </button>

          <button 
        className='users-button4' 
        onClick={() => navigate('/users')}>
          Users
          </button>

          <button 
        className='users-button5' 
        onClick={() => navigate('/users')}>
          Users
          </button>

          <button 
        className='users-button6' 
        onClick={() => navigate('/users')}>
          Users
          </button>

      </header>
    </div>
  );
}


export default App;
