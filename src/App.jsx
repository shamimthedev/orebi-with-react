import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./layouts/RootLayout";
import Shop from "./pages/Shop";
import SingleProductDetails from "./components/SingleProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/cart" element={<Cart />}></Route> */}
          <Route path="/product/:productId" element={<SingleProductDetails/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
