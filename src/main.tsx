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
import AccountPage from "./Pages/AccountPage.tsx";
import BrowseAllProducts from "./Pages/BrowseAllProducts.tsx";
import SingleProductPage from "./Pages/SingleProductPage.tsx";

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
        <Route path="/account" element={<AccountPage />} />
        <Route path="/browse" element={<BrowseAllProducts />} />
        <Route path="/:productId" element={<SingleProductPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
