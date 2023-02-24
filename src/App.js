import './App.css';

import Content from './components/Content';
import Typing from './components/Typing';


import { useSelector } from 'react-redux';
import Result from './components/Result'


function App() {

  const rest = useSelector(state => state.type.result)

  console.log(rest.dogru);
  return (
    <div className="App">
      <Content />
      <Typing />
      {
        rest ? <Result /> : " "
      }
    </div>
  );
}

export default App;
