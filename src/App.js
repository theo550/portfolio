import './App.css';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Name from './components/Name'
import Error from './components/Error';
import Help from './components/Help';
import Link from './components/Link';
import Source from './components/Source';

function App() {

  // autoScroll to the bottom
  const commandEl = useRef(null)
  useEffect(() => {
    if (commandEl) {
      commandEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  // focus on the input when component in mounted
  const searchInput = useRef(null);
  useEffect(() => {
    searchInput.current.focus()
  }, [])

  const [array, setArray] = useState([])

  const handleInput = (e) => {
    if (e.key === 'Enter') {

      switch (e.target.value) {
        case 'name':
          setArray([...array, <Name/>])
          break;
        
        case 'help':
          setArray([...array, <Help/>])
          break;
        
        case 'clear':
          setArray([])
          break;

        case 'link github':
          setArray([...array, <Link option='github' command={e.target.value}/>])
          break
        
        case 'link linkedin':
          setArray([...array, <Link option='linkedin' command={e.target.value}/>])
          break
        
        case 'source':
          setArray([...array, <Source />])
          break
      
        default:
          setArray([...array, <Error command={e.target.value}/>])
          break;
      }

      e.target.value = ''
    }
  }


  return (
    <div className="App">
      <p>Théo Gaudin@portfolio % entrez une commande pour commencer.</p>
      <p>La commande "help" vous permet de visionner toutes les commandes disponibles.</p>
      <ul className='commandApp' ref={commandEl}>
        {array.map((component, index) => <React.Fragment key={index}>{component}</React.Fragment>)}
        <p>Théo Gaudin@portfolio % <input ref={searchInput} onKeyDown={handleInput} className="input"/></p>
      </ul>
    </div>
  );
}

export default App;
