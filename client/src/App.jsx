import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/Auth";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
