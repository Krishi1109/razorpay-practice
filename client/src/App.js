import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home";
import PaymenSuccess from "./PaymenSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<PaymenSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
