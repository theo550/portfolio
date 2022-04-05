import {useEffect, useState} from 'react'

export default function Link({ option, command }) {

  const [link, setLink] = useState('')

  useEffect(() => {
    if (option === "github") {
      setLink('https://github.com/theo550')
    } else {
      setLink('https://www.linkedin.com/in/theogaudin/')
    }
  }, [option])

  return (
    <div className="command">
      <p>Théo Gaudin@portfolio % {command}</p>
      <a className='App-link' rel="noreferrer" href={link} target='_blank'>{link}</a>
    </div>
  )
}
