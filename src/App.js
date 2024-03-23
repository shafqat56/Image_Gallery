
import './App.css';

import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Images from './components/Images/Images'
import images from './assets/imagesData';

function App() {
  
  return (
   
    <div >
      <Nav />
      <Header/>
      <Images  images={images} />

    </div>
  );
}

export default App;
