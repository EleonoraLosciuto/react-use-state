import { useState } from 'react'
import './App.css'
import languages from './assets/languages.js'
import Button from './components/Button.jsx'

function App() {
  const [active, setActive] = useState(0); //useState is initially set as 0 in order to not display any description-card and let user decide where to start
  const classList = [ // classList is used to display / not display the description card
    "description-card",
    active === 0
      ? undefined
      : "view"
  ]

  return (
    <>
      <h1>Learn Web Development</h1>

      <div className="web-languages">
        {
          languages.map(
            (language) => {

              // isActive variable to pass boolean value to child through props - below open attribute on Button component 
              const isActive = language === active;

              // note: onClickCustom attribute to pass function to child through props
              return (
                <Button onClickCustom={() => setActive(language)} open={isActive} key={language.id} language={language} />
              )
            })}
      </div>

      <div className={classList.join(" ") // join method in className to add "view" class after first click of user
      }>
        <h2>{active.title}</h2>
        <p>{active.description}</p>
      </div>
    </>
  )
}

export default App
