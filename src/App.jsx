import { useState } from 'react'
import './App.css'
import languages from './assets/languages.js'
import Button from './components/Button.jsx'
import DescriptionCard from './components/DescriptionCard.jsx'

function App() {
  const [active, setActive] = useState(null); // useState initially set as null in order to not show DescriptionCard

  return (
    <>
      <h1>Learn Web Development</h1>

      <div className="web-languages">
        {
          languages.map(
            (language) => {

              // isActive variable to pass boolean value to child through props (see below open attribute on Button component)
              const isActive = language === active;

              // note: onClick attribute to pass function to child through props
              return (
                <Button onClick={() => setActive(language)} open={isActive} key={language.id} language={language} />
              )
            })}
      </div>
      <DescriptionCard active={active} />

    </>
  )
}

export default App
