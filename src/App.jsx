import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Ementa from "./pages/Ementa";
import Apresentacoes from "./pages/Apresentacoes";
import Podcasts from "./pages/Podcasts";
import Cases from "./pages/Cases";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ementa" element={<Ementa />} />
          <Route path="/apresentacoes" element={<Apresentacoes />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/cases" element={<Cases />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
