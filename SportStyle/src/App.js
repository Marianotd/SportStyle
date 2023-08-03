import './scss/styles.css'
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Context
import CrudContextProvider from './context/CrudContext';
// Components
import NavBar from "./components/Sections/NavBar";
import Index from './components/Sections/Index';
import Products from './components/Products';

import ItemDetailContainer from "./components/ItemDetailContainer";
import UserMenu from './components/Sections/UserMenu';
import Select from './components/CRUD/Select';
import UpdateProduct from './components/CRUD/CRUDProductos/UpdateProduct';
import CreateProduct from './components/CRUD/CRUDProductos/CreateProduct';
import UpdateCategory from './components/CRUD/CRUDCategorias/UpdateCategory';
import CreateCategory from './components/CRUD/CRUDCategorias/CreateCategory';
import UpdateSubCategory from './components/CRUD/CRUDSubCategorias/UpdateSubCategory'
import CreateSubCategory from './components/CRUD/CRUDSubCategorias/CreateSubCategory';
import UpdateBrand from './components/CRUD/CRUDMarcas/UpdateBrand';
import CreateBrand from './components/CRUD/CRUDMarcas/CreateBrand';

import Footer from "./components/Footer";


function App() {

  return (
    <CrudContextProvider>
      <Router>
        <NavBar />

        <Routes>          
          <Route exact path="/" element={<Index/>}/>

          <Route path={`/Usuario`} element={<UserMenu/>}/>
          
          <Route path={`/Productos/`} element={<Products/>}/>
          <Route path={`/Productos/:id`} element={<ItemDetailContainer/>}/>

          
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
    </CrudContextProvider>
  );
}

export default App;
