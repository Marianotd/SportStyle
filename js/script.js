// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const carouselProductos = document.getElementById("carouselProductos")

// CLASES
class Producto {
    constructor(id, nombre, marca, precio, img, usuario, categoria, talle, stock, disponible, destacado, cantidad){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.img = img
        this.usuario = usuario
        this.categoria = categoria
        this.talle = talle
        this.stock = stock
        this.disponible = disponible
        this.destacado = destacado
        this.cantidad = cantidad
    }
}

// ARRAYS
const talleIndumentaria = ["XS" ,"S", "M", "L", "XL", "XXL"]
const talleCalzado = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]

// REVISAR LOCAL STORAGE
usersData = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : localStorage.setItem("usersData", JSON.stringify(usersData))                        

// PRODUCTOS
const producto1 = new Producto(1, "Camiseta Titular Selección Argentina Messi 10", "Adidas", 17499, "media/img/productos/CamisetaMessi.png", "Hombre", "Remera", talleIndumentaria, 50, true, true, 0)
const producto2 = new Producto(2, "Zapatillas Elastica New Flame 21 Atomik", "Atomik", 6639, "media/niños/Productos/ZaptillasElasticaNewFlame21Atomik.jpg",  "Niños", "Calzado", talleCalzado, 10, true, true, 0)
const producto3 = new Producto(3, "Pelota Campo Lider XXI Penalty", "Penalty", 4599, "media/niños/Productos/PelotaCampoLiderXXIPenalty.jpg", "Todos" , "Accesorio", null, 13, true, false, 0)
const producto4 = new Producto(4, "Campera Icon Selección Argentina adidas", "Adidas", 13999, "media/hombre/productos/CamperaConSeleccionArgentinaAdidas.jpg", "Hombre", "Abrigo", talleIndumentaria, 5, true, false, 0)
const producto5 = new Producto(5, "Botines Predator Edge.3 Pasto Sintético", "Adidas", 16999, "media/img/productos/BotinesPredator.png", "Hombre", "Calzado", talleCalzado, 8, true, false, 0)
const producto6 = new Producto(6, "Pantalón Nike Dri-FIT Strike 21", "Nike", 12499, "media/hombre/productos/PantalonNikeDriFitStrike21.png", "Hombre", "Pantalon", talleIndumentaria, 15, true, true, 0)
const producto7 = new Producto(7, "Zapatillas Gel-Equation 11", "Asics", 17490, "media/hombre/productos/ZapatillasGelEquation11.png", "Hombre", "Calzado", talleCalzado, 2, true, false, 0)
const producto8 = new Producto(8, "Remera Sin Mangas Back", "Ascis", 4800, "media/hombre/productos/RemeraSinMangaBack.png", "Hombre", "Remera", talleIndumentaria, 20, true, true, 0)
const producto9 = new Producto(9, "Zapatillas Superstar", "Adidas", 20999, "media/img/productos/ZapatillasSuperstar.png", "Hombre", "Calzado", talleCalzado, 60, true, true, 0)
const producto10 = new Producto(10, "Zapatillas Gel Hypersonic 2 W Asics", "Asics", 20489, "media/mujer/productos/ZapatillasGelHypersonic2WAsics.jpg", " Mujer", "Calzado", talleCalzado, 9, true, true, 0)
const producto11 = new Producto(11, "Remera En V Neck Ss Asics", "Asics", 5869, "media/mujer/productos/RemeraEnVNeckSsAsics.jpg", "Mujer", "Remera", talleIndumentaria, 50, true, false, 0)
const producto12 = new Producto(12, "Botella Sportstyle Puma", "Puma", 4199, "media/mujer/productos/BotellaSportStylePuma.jpg", "Todos" , "Accesorio", null, 14, true, false, 0)
const producto13 = new Producto(13, "Zapatillas Forum Low", "Adidas", 23999, "media/img/productos/ZapatillasForumLow.png", "Hombre", "Calzado", talleCalzado, 12, true, false, 0)
const producto14 = new Producto(14, "Remera Mujer Match Ii Fila", "Fila", 2689, "media/mujer/productos/RemeraMujerMatchLiFila.jpg", "Mujer", "Remera", talleIndumentaria, 25, true, true, 0)
const producto15 = new Producto(15, "Zapatillas Trend 2.0 W Fila", "Fila", 9489, "media/mujer/productos/ZapatillasTrend20WFila.jpg", "Mujer", "Calzado", talleCalzado, 1, true, false, 0)
const producto17 = new Producto(16, "ZAPATILLAS GALAXY 5", "Adidas", 11499, "media/hombre/productos/ZapatillasGalaxy5.png", "Hombre", "Cakzadi", talleCalzado, 23, true, true, 0)
const producto18 = new Producto(17, "Buzo Nike Dri-Fit Sport Clash", "Nike", 12699, "media/hombre/productos/NikeDriFitSport.png", "Hombre", "Abrigo", talleIndumentaria, 12, true, true, 0)
const producto19 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto20 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto21 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto22 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto23 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto24 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto25 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto26 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto27 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto28 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto29 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto31 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto32 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto33 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto34 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto35 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto36 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto37 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto38 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto39 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto40 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)
const producto41 = new Producto(16, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Campera", talleIndumentaria, 12, true, true, 0)


const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16]

// AÑADIR PRODUCTOS EN CARROUSEL
productos.forEach(producto => {

    if(producto.destacado == true){
        carouselProductos.innerHTML += `
            <li>
                <div id="producto${producto.id}" class="card border-0 producto">
                    <p>${producto.nombre} <br> $${producto.precio}</p>
                    <img class="img img-fluid" src="${producto.img}" alt="${producto.nombre}">
                    <button class="py-1 px-4 rounded">Añadir</button>
                </div>
            </li>
        `
    }
})