import React, {useState} from 'react'
import Navbar from '../Navbar';
import DynamicComponent from '../../containers/DynamicComponent'
import EventBus from '../../utils/EventBus'
import './style.scss';

const Layout = () => {

  window.EventBus = new EventBus();

  const [system, setSystem] = useState(undefined);

  const setApp = (remote) => {
    setSystem(remote);
  }

  const sendEvent = () => {
    window.EventBus.dispatchEvent('shell', 'sending event!');
  }

  return (
    <div id='layout'>
      <button onClick={sendEvent}> Send event </button>
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