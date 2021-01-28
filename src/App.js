import './App.css';
import { Provider } from 'react-redux';
import newStore from './redux/store/stateStore';
import StateDataWithoutHooks from './components/StateDataWithoutHooks';
import NavBarBS from './components/NavBarBS';



function App() {
  return (
    <Provider store={newStore}>      
      <div className="App">    
        {/* <NavBarBS/>                 */}
        <div className="App-header">
          USA COVID-19 Visualizer
        </div>
        <br/>
        <div className="Content">
          <StateDataWithoutHooks />
       </div>
        <div className="footer">
          <span>Made with React, Redux, Bootstrap, Data that powers these graphs comes from this <a href="https://covidtracking.com/data/api">API</a></span>
        </div>
      </div>
    </Provider>
  );
}

export default App;
