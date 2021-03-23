import React, {useState, useEffect} from 'react'

const Navbar = ({onClick}) =>  {
  const [remotes, setRemotes] = useState([]);

  useEffect(async () => {
    await fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((res) => setRemotes(res));
  },[])

  return (
    <div id='left'>
      <div className='icon'>
          &equiv;
      </div>
      {
        remotes.map(remote => { 
          return <div className='icon' key={remote.scope + remote.module} onClick={() => onClick(remote)}>{remote.id}</div>
        })
      }
    </div>
  )
}

export default Navbar