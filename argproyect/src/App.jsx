import {
  Browser,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Footer/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AddPost from "./components/AddPost/AddPost";

import "./App.css";

function App (){
  return (
    <BrowserRouter>
    <div className="container"/>
      <Header isLogged={true}/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new-post" element={<AddPost/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}


export default App;
 