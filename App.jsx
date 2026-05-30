import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './student'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{textAlign: "center"}}>
     <h1>My web page of abes</h1>
     <Student name="aryan" course="b.tech" marks="99"/>
     <Student name="raj" course="b.tech" marks="20"/>
     <Student name="rohan" course="b.tech" marks="40"/>
    {/*
     <img src="https://images.pexels.com/photos/20447506/pexels-photo-20447506.jpeg" width="300" height="400"></img><br></br>
     <iframe
           width="560"
           height="315"
           src="https://www.youtube.com/embed/LhpZJwUboeI"
            title="YouTube video player"
           allowFullScreen
     ></iframe>
     <audio controls>
     <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mp3"
           />
     </audio>
    <br></br>

    <button
        style={{
        padding: "15px 30px",
        fontSize: "20px"
       }}>
        click me
    </button>
  */}
    </div>
  )
 }
export default App