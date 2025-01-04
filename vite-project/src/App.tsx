import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {
  const [image, setImage]=useState();
  const onClickButton=()=>{
    axios.get("https://picsum.photos/800").then((res)=>{
      setImage(res)
      console.log(image)
  })
  }

  return (
    <>
      <button onClick={onClickButton}>ランダム</button>
      <div>
      <img height={500} width={500} src={image} />
      </div>
    </>
  )
}

export default App
