import React, {useState} from 'react'
import Navbar from '../Navbar';
import DynamicComponent from '../../containers/DynamicComponent'
import './style.scss';

const Layout = () => {

  const [system, setSystem] = useState(undefined);

  const setApp = (remote) => {
    setSystem(remote);
  }

  return (
    <div id='layout'>
      <Navbar onClick={setApp} />

      <main id='main'>
        <div className='content'>
          <DynamicComponent system={system} />
        </div> 
      </main>

    </div>
  );
}

export default Layout