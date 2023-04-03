import Brands from "./components/Brands";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Novelty from "./components/Novelty";
import PageCover from "./components/PageCover";
import './scss/styles.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsMenu from "./components/ProductsMenu";
import ItemListContainer from "./components/ItemListContainer";
import ProductCreate from "./components/ProductCreate";

function App() {

  return (
    <>
      <Router>
        
        <NavBar />

        <Routes>
          
          <Route path="/" element={
              <>
                <News />
                <PageCover />
                <Novelty />
                <Brands />
              </>
            }
          />

          <Route path={`/Productos/`} element={
              <>
                <ProductsMenu/>
                <ItemListContainer/>
              </>
            }
          />

          <Route path={`/Productos/Nuevo`} element={<ProductCreate/>}/>

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
