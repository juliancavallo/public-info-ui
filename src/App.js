import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Default from "./pages/Default";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/public-info-ui" element={<Home/>} />
          <Route path="/public-info-ui/projects" element={<Projects/>} />
          <Route
            path="*"
            element={<Default/>}/>

        </Routes>
      </BrowserRouter>
  );
}
  
export default App;