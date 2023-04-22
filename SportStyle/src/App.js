import './scss/styles.css'
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Context
import GeneralContextProvider from './context/GeneralContext';
// Components
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Novelty from "./components/Novelty";
import PageCover from "./components/PageCover";
import ProductsMenu from "./components/ProductsMenu";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import UserMenu from './components/UserMenu';
import Select from './components/CRUD/Select';
import UpdateProduct from './components/CRUD/CRUDProductos/UpdateProduct';
import CreateProduct from './components/CRUD/CRUDProductos/CreateProduct';
import UpdateCategory from './components/CRUD/CRUDCategorias/UpdateCategory';
import CreateCategory from './components/CRUD/CRUDCategorias/CreateCategory';
import UpdateSubCategory from './components/CRUD/CRUDSubCategorias/UpdateSubCategory'
import CreateSubCategory from './components/CRUD/CRUDSubCategorias/CreateSubCategory';
import UpdateBrand from './components/CRUD/CRUDMarcas/UpdateBrand';
import CreateBrand from './components/CRUD/CRUDMarcas/CreateBrand';

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
          <Route path={`/Productos/:id`} element={<ItemDetailContainer/>}/>

          <Route path={`/Usuario`} element={<UserMenu/>}/>
          <Route path={`/Usuario/Productos`} element={<Select route={'Productos'}/>}/>
          <Route path={`/Usuario/Productos/Nuevo`} element={<CreateProduct/>}/>
          <Route path={`/Usuario/Productos/:id`} element={<UpdateProduct/>}/>

          <Route path={`/Usuario/Categorias`} element={<Select route={'Categorias'}/>}/>
          <Route path={`/Usuario/Categorias/Nuevo`} element={<CreateCategory/>}/>
          <Route path={`/Usuario/Categorias/:id`} element={<UpdateCategory/>}/>

          <Route path={`/Usuario/SubCategorias`} element={<Select route={'SubCategorias'}/>}/>
          <Route path={`/Usuario/SubCategorias/Nuevo`} element={<CreateSubCategory/>}/>
          <Route path={`/Usuario/SubCategorias/:id`} element={<UpdateSubCategory/>}/>

          <Route path={`/Usuario/Marcas`} element={<Select route={'Marcas'}/>}/>
          <Route path={`/Usuario/Marcas/Nuevo`} element={<CreateBrand/>}/>
          <Route path={`/Usuario/Marcas/:id`} element={<UpdateBrand/>}/>

        </Routes>
        <Footer />
      </Router>
    </GeneralContextProvider>
  );
}

export default App;
