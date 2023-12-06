import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./screens/HomePage";
import MenPage from "./screens/MenPage"
import WomenPage from "./screens/WomenPage"
import KidsPage from "./screens/KidsPage"

import {BrowserRouter, Route, Routes} from "react-router-dom"
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage></HomePage >}></Route>
      <Route path="/men-shoe" element={<MenPage></MenPage>}></Route>
      <Route path="/women-shoe" element={<WomenPage></WomenPage>}></Route> 
      <Route path="/kids-shoe" element={<KidsPage></KidsPage>}></Route> 
      </Routes>
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;



