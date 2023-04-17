import './scss/styles.css'
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Context
import GeneralContextProvider from "./context/GeneralContext";
// Components
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Novelty from "./components/Novelty";
import PageCover from "./components/PageCover";
import ProductsMenu from "./components/ProductsMenu";
import ItemListContainer from "./components/ItemListContainer";
import ProductCreate from "./components/ProductCreate";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  return (
    <GeneralContextProvider>
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
          <Route path={`/Productos/:id`} element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer />
      </Router>
    </GeneralContextProvider>
  );
}

export default App;
