
import './App.css';
import Counter from './containers/ReduxClassComponent/Counter';
import CounterHook from './containers/ReduxHook/CounterHook'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/Counter">
              <Counter/>
            </Route>
            <Route path="">
              <CounterHook/>
            </Route>
          </Switch>
        </Router>
    </div> 
  );
}

export default App;
