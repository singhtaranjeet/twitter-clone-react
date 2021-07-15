import './App.css';
import Routes from './routes/index'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    
    <>
      <Router>
        <div style={{ display: "flex" }}>
         
          <Routes />
        </div>
      </Router>
    </>
  );
}

export default App;
