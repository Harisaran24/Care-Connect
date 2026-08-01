import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beneficiaries from "./pages/Beneficiaries";
import Donate from "./pages/Donate";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import SingleBeneficiary from "./pages/SingleBeneficiary";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beneficiaries" element={<Beneficiaries />} />
        <Route path="/beneficiaries/:id" element={<SingleBeneficiary />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


