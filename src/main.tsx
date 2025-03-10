import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import Benefits from "./Pages/BenefitsPage.tsx";
import PrimeSignup from "./Pages/PrimeSignup.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Features from "./Pages/Features.tsx";
import SignIn from "./Pages/SignIn.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/prime-signup" element={<PrimeSignup />} />
        <Route path="/features" element={<Features />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
