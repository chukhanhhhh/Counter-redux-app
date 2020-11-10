
import './App.css';
import Counter from './containers/ReduxClassComponent/Counter';
import CounterHook from './containers/ReduxHook/CounterHook'
function App() {
  return (
    <div className="App">
        <h1>Use redux class component</h1>
        <Counter />
        <hr/>
        <h1>Use redux hook</h1>
        <CounterHook />
    </div> 
  );
}

export default App;
