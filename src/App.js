import {BrowserRouter,Route} from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen'
import AccountScreen from './Screens/AccountScreen'
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route exact path="/" component={LoginScreen}/>
     <Route  path="/account" component={AccountScreen}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
