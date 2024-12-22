import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/Auth";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import MyLearning from "./pages/Student/MyLearning";
import Profile from "./pages/Student/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/mylearning" element={<MyLearning />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
