import './App.css';
import Home from './Home'
import {useEffect,useState} from 'react'
function App() {
  // const [isPending,setIsPending] = useState(true);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setIsPending(false);
  //   },1000)  
  // })
  return (
    <div className="App">
      {/* {isPending && <p>Loading...</p>} */}
      <div className = "content">
        <Home />
      </div>
    </div>
  );
}

export default App;
