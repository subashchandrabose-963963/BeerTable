// import './App.css';
import BeerTableView from './container/BeerTableView';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BeerTableView />
      </Provider>
    </div>
  );
}

export default App;
