import './App.css';
import { useState } from 'react';

function App() {
  const [imageURL, setImageURL]=useState()
  const [isLoading, setIsLoading]=useState(false);

  const fetchRandomImage=()=>{
    setIsLoading(true)
    const timestamp=new Date().getTime();
    const newImageURL=`https://picsum.photos/800?random=${timestamp}`
    setImageURL(newImageURL)
    setIsLoading(false)
  }

  return(
    <>
      <button onClick={fetchRandomImage}>ランダム画像表示</button>
      {imageURL &&
      <div>
        {isLoading ? <div>loading...</div>:<img height={300} width={300} src={imageURL}/>}
      </div>}
    </>
  )
}

export default App;
