import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import {Routes,Route} from 'react-router-dom'

function App( ) {
  return (
   <>

 <Navbar/>
 <Routes>
<Route path='/' exact element={<Home/>}/>
<Route path='/about' exact element={<About/>}/>
<Route path='/skill' exact element={<Skill/>}/>
<Route path='/work' exact element={<Work/>}/>
<Route path='/contact'  exact element={<Contact/>}/>
 </Routes>

 {/* <Home/>
 <About/>
 <Skill/>
 <Work/>
 <Contact/> */}
    </>
  );
}

export default App;

