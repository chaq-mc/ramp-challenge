import { useState, useEffect } from 'react'
import './App.css'
import Word from './Word';

function App() {
  const url = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/686572';

  const [isLoading, setIsLoading] = useState(true);
  const [word, setWord] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text()
      .then((text) => {
        setWord(text);
        setIsLoading(false);
      }))
  }, [])

  return (
    <>
      {isLoading ? <p>Loading...</p> : <Word word={word}/>}
    </>
  )
}

export default App
