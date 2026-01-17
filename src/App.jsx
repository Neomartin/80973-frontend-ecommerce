import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ProductDetail from "./pages/product-detail/ProductDetail";
import Register from "./pages/register/Register";
import AdminProducts from "./pages/admin/products/AdminProducts";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";



function App() {
  return (
    <>
      <Header />


      <main>
        
        <Routes>

          <Route path="/" element={ <Home /> }   />

          <Route path="/about" element={ <About /> }   />

          <Route path="/register" element={ <Register /> }   />

          <Route path="/product/:id" element={ <ProductDetail /> }   /> 

          <Route path="/admin/products" element={ <AdminProducts /> }   />

        </Routes>

      </main>
     

      <Footer />
    </>
  );
}


export default App;
