import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./layouts/RootLayout";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
