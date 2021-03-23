import React, { useEffect, useState } from 'react'
import LazyComponent from './containers/LazyComponent'
import Layout from './components/Layout'

const App = () => {
  const [remotes, setRemotes] = useState([]);
  const [system, setSystem] = useState(undefined);

  useEffect(async () => {
    await fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((res) => setRemotes(res));
  },[])

  const setApp = (remote) => {
    setSystem(remote);
  }

  return (
    <>
      <Layout />
      {
        remotes.map(remote => { 
          return <button key={remote.scope + remote.module} onClick={() => setApp(remote)}>Load App {remote.scope} Widget</button>
        })
      }

      <div style={{ marginTop: "2em" }}>
        <LazyComponent system={system} />
      </div>
    </>
  );
}

export default App;