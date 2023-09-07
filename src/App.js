import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Haris from "./Haris";
import Shamal from "./Shamal";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Haris />} />
          <Route path="/Shamal" element={<Shamal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
