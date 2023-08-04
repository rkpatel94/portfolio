import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Modules/Home";
import Details from "./Components/Details";
import MyResume from "./Components/MyResume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" index element={<Details />} />
        <Route path="/my-resume" index element={<MyResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
