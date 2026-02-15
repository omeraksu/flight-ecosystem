import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { LegalPage } from "./pages/LegalPage";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <div className="min-h-screen bg-black">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
  