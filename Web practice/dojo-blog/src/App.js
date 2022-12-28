import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  //const title = "App Component"

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h1>{title}</h1> */}
          <Routes>
            <Route path='/' element={<Home/>}/>  
            <Route path='/create' element={<Create/>}/>  
            <Route path='/blogs/:id' element={<BlogDetails/>}/>
          </Routes>
        </div>
      </div> 
    </Router>
  );
}

export default App;
