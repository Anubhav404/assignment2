import "./App.css";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route  path="/main" element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
  </div> 
  );
}

export default App;
