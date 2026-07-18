import { useState } from 'react'
import './App.css'
import languages from './assets/languages.js'
import Button from './components/Button.jsx'

function App() {
  const [active, setActive] = useState(languages[0])

  return (
    <>
      <h1>Learn Web Development</h1>

      <div className="web-languages">
        {
          languages.map(
            (language) => {
              const isActive = language === active;

              return (
                <Button onClickCustom={() => setActive(language)} open={isActive} key={language.id} language={language} />
              )
            })}
      </div>
      <div className="description-card">
        <h2>{active.title}</h2>
        <p>{active.description}</p>
      </div>
    </>
  )
}

export default App
