import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Projects from "./pages/Projects";
import Salaries from "./pages/Salaries";
import Home from "./pages/Home";
import Default from "./pages/Default";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/salaries" element={<Salaries/>} />
          <Route
            path="*"
            element={<Default/>}/>

        </Routes>
      </BrowserRouter>
  );
}
  
export default App;