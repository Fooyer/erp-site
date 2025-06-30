import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Layout from "./components/Layout";

// Lazy imports
const Home = React.lazy(() => import("./pages/Home"));
const Ementa = React.lazy(() => import("./pages/Ementa"));
const Apresentacoes = React.lazy(() => import("./pages/Apresentacoes"));
const Podcasts = React.lazy(() => import("./pages/Podcasts"));
const Cases = React.lazy(() => import("./pages/Cases"));

// Componente de loading usando react-spinners
const LoadingSpinner = () => (
  <div className="spinner-container">
    <ClipLoader
      color="#3b82f6"
      loading={true}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ementa" element={<Ementa />} />
            <Route path="/apresentacoes" element={<Apresentacoes />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/cases" element={<Cases />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
