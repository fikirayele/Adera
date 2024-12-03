
import { Fragment } from 'react';
import './App.css';

//components
import InputUser from './components/InputUser';
import ListUser from './components/ListUser';

function App() {
  return (
    <Fragment>  
      <div className='container'>
        <InputUser/>
        <ListUser/>
        </div>
        </Fragment>
  );
}

export default App;
