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

class User {
    constructor(email, password, name, surname, birthday, country, gender, sesionActive){
        this.email = email
        this.password = password
        this.name = name
        this.surname = surname
        this.birthday = birthday
        this.country = country
        this.gender = gender
        this.sesionActive = sesionActive
    }
}

class Contacto {
    constructor(email, name, surname, tel, mesage) {
        this.email = email
        this.name = name
        this.surname = surname
        this.tel = tel
        this.mesage = mesage
    }
}

// ARRAYS PRODUCTOS
const carrito = []

// ARRAYS USUARIOS
const users = []
let usersData = []
const contacto = []

// PRODUCTOS
const producto1 = new Producto(1, "Camiseta Titular Selección Argentina Messi 10", "Adidas", 17499, "media/img/productos/CamisetaMessi.png", "Hombre", "Remera", "", 50, true, true, 0)
const producto2 = new Producto(2, "Zapatillas Elastica New Flame 21 Atomik", "Atomik", 6639, "media/niños/Productos/ZaptillasElasticaNewFlame21Atomik.jpg",  "Niños", "Calzado", "", 10, true, true, 0)
const producto3 = new Producto(3, "Pelota Campo Lider XXI Penalty", "Penalty", 4599, "media/niños/Productos/PelotaCampoLiderXXIPenalty.jpg", "Niños" , "Accesorio", null, 13, true, false, 0)
const producto4 = new Producto(4, "Campera Icon Selección Argentina adidas", "Adidas", 13999, "media/hombre/productos/CamperaConSeleccionArgentinaAdidas.jpg", "Hombre", "Abrigo", "", 5, true, false, 0)
const producto5 = new Producto(5, "Botines Predator Edge.3 Pasto Sintético", "Adidas", 16999, "media/img/productos/BotinesPredator.png", "Hombre", "Calzado", "", 8, true, false, 0)
const producto6 = new Producto(6, "Pantalón Nike Dri-FIT Strike 21", "Nike", 12499, "media/hombre/productos/PantalonNikeDriFitStrike21.png", "Hombre", "Pantalon", "", 15, true, true, 0)
const producto7 = new Producto(7, "Zapatillas Gel-Equation 11", "Asics", 17490, "media/hombre/productos/ZapatillasGelEquation11.png", "Hombre", "Calzado", "", 2, true, false, 0)
const producto8 = new Producto(8, "Remera Sin Mangas Back", "Ascis", 4800, "media/hombre/productos/RemeraSinMangaBack.png", "Hombre", "Remera", "", 20, true, true, 0)
const producto9 = new Producto(9, "Zapatillas Superstar", "Adidas", 20999, "media/img/productos/ZapatillasSuperstar.png", "Hombre", "Calzado", "", 60, true, true, 0)
const producto10 = new Producto(10, "Zapatillas Gel Hypersonic 2 W Asics", "Asics", 20489, "media/mujer/productos/ZapatillasGelHypersonic2WAsics.jpg", "Mujer", "Calzado", "", 9, true, true, 0)
const producto11 = new Producto(11, "Remera En V Neck Ss Asics", "Asics", 5869, "media/mujer/productos/RemeraEnVNeckSsAsics.jpg", "Mujer", "Remera", "", 50, true, false, 0)
const producto12 = new Producto(12, "Botella Sportstyle Puma", "Puma", 4199, "media/mujer/productos/BotellaSportStylePuma.jpg", "Mujer" , "Accesorio", null, 14, true, false, 0)
const producto13 = new Producto(13, "Zapatillas Forum Low", "Adidas", 23999, "media/img/productos/ZapatillasForumLow.png", "Hombre", "Calzado", "", 12, true, false, 0)
const producto14 = new Producto(14, "Remera Mujer Match Ii Fila", "Fila", 2689, "media/mujer/productos/RemeraMujerMatchLiFila.jpg", "Mujer", "Remera", "", 25, true, true, 0)
const producto15 = new Producto(15, "Zapatillas Trend 2.0 W Fila", "Fila", 9489, "media/mujer/productos/ZapatillasTrend20WFila.jpg", "Mujer", "Calzado", "", 1, true, false, 0)
const producto16 = new Producto(16, "ZAPATILLAS GALAXY 5", "Adidas", 11499, "media/hombre/productos/ZapatillasGalaxy5.png", "Hombre", "Calzado", "", 23, true, true, 0)
const producto17 = new Producto(17, "Buzo Nike Dri-Fit Sport Clash", "Nike", 12699, "media/hombre/productos/NikeDriFitSport.png", "Hombre", "Abrigo", "", 12, true, false, 0)
const producto18 = new Producto(18, "Remera Ufc Fan Gear Text Reebok", "Reebok", 5439, "media/hombre/productos/RemeraReebokUFCGearText.png", "Hombre", "Remera", "", 5, true, false, 0)
const producto19 = new Producto(19, "Zapatillas Energen Lite Reebok", "Reebok", 11499, "media/hombre/productos/ZapatillasReebokEnergenLite.png", "Hombre", "Calzado", "", 1, true, false, 0)
const producto20 = new Producto(20, "Campera Tenacity New Balance", "New Balance", 18499, "media/hombre/productos/CamperaTenacityNewBalance.jpg", "Hombre", "Campera", "", 23, true, true, 0)
const producto21 = new Producto(21, "Remera Own The Run adidas", "Adidas", 7859, "media/mujer/productos/RemeraAdidasOwnTheRun.jpg", "Mujer", "Remera", "", 8, true, false, 0)
const producto22 = new Producto(22, "Remera Ba Run21 Ss Tee W 1 adidas", "Adidas", 3999, "media/mujer/productos/RemeraBaRun21SsTeeW1Adidas.jpg", "Mujer", "Remera", "", 12, true, false, 0)
const producto23 = new Producto(23, "Zapatillas Smash Wns V2 L Adp Puma", "Puma", 11549, "media/mujer/productos/ZapatillasSmashWnsV2LAdpPuma.jpg", "Mujer", "Calzado", "", 3, true, false, 0)
const producto24 = new Producto(24, "Campera Deportiva Favorites Tt Wv adidas", "Adidas", 14429, "media/mujer/productos/CamperaDeportivaFavoritesTtWvadidas.jpg", "Mujer", "Abrigo", "", 10, true, true, 0)
const producto25 = new Producto(25, "Campera Myt W Reebok", "Reebok", 7859, "media/mujer/productos/RemeraAdidasOwnTheRun.jpg", "Mujer", "Abrigo", "", 2, true, true, 0)
const producto26 = new Producto(26, "Zapatillas Lugano 6.0 Vlc Baby Fila", "Fila", 6289, "media/niños/Productos/ZapatillasLugano60VlcBabyFila.jpg", "Niños", "Calzado", "", 10, true, false, 0)
const producto27 = new Producto(27, "Cuello Necktube Camo Salomon", "Salomon", 1469, "media/niños/Productos/CuelloNecktubeCamoSalomon.jpg", "Niños", "Accesorio", null, 16, true, false, 0)
const producto28 = new Producto(28, "Zapatillas Elastica Triumph Atomik", "Atomik", 6489, "media/niños/Productos/ZapatillasElasticaTriumphAtomik.jpg", "Niños", "Calzado", "", 2, true, false, 0)
const producto29 = new Producto(29, "Pelota Padel X 3 Ball Wilson", "Wilson", 2599, "media/niños/Productos/PelotaPadelX3BallWilson.jpg", "Niños", "Accesorio", null, 33, true, false, 0)
const producto30 = new Producto(30, "Buzo BUZO COLEGIAL K 22 Kamp", "Kamp", 2999, "media/niños/Productos/BuzoBUZOCOLEGIALK22Kamp.jpg", "Niños", "Abrigo", "", 8, true, false, 0)
const producto31 = new Producto(31, "Sandalias Sublim Mickey Footy", "Footy", 4299, "media/niños/Productos/SandaliasSublimMickeyFooty.jpg", "Niños", "Calzado", "", 10, true, false, 0)
const producto32 = new Producto(32, "Medias Quarter 3p Puma", "Puma", 2199, "media/niños/Productos/MediasQuarter3pPuma.jpg", "Niños", "Accesorio", null, 5, true, false, 0)
const producto33 = new Producto(33, "Antiparra Jet Speedo", "Speedo", 1799, "media/niños/Productos/AntiparraJetSpeedo.jpg", "Niños", "Accesorio", null, 2, true, false, 0)
const producto34 = new Producto(34, "Guantes Fit Drb Force DRB", "DRB", 3399, "media/niños/Productos/GuantesFitDrbForceDRB.jpg", "Niños", "Accesorio", null, 6, true, false, 0)
const producto35 = new Producto(35, "Bolso Tote Promo Benito Topper", "Topper", 1999, "media/niños/Productos/BolsoTotePromoBenitoTopper.jpg", "Niños", "Accesorio", null, 9, true, false, 0)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30, producto31, producto32, producto33, producto34, producto35]
