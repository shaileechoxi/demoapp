import React, { useEffect, useRef } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Lottie from 'lottie-react-web'
import Lottie from 'lottie-web';

function App() {

  const container = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./images/hello.json')
    })
  }, [])

  return (
    <div className="App">
      <div className="container" ref={container}></div>
      <div className="heading-wrapper"><h1 className="lms-heading">Holla From Unicus!!</h1>
        <Button onClick={() => alert('You Clicked Me')}  color="primary" variant="contained">Click Me</Button>
      </div>
    </div>
  );
}

export default App;
