import abrigo from './img/abrigo.png'
import arquero from "./img/arquero.png"
import campera from "./img/campera.png"
import chomba from "./img/chomba.png"
import camperaCasual from "./img/camperacasual.png"
import camperon from "./img/camperon.png"
import chombaNegra from "./img/chombanegra.png"
import gorra from "./img/gorra.png"
import jogging from "./img/jogging.png"
import muscuEntrenamiento from "./img/muscentrenamiento.png"
import musculosa from "./img/musculosa.png"
import nuevo from "./img/nuevo.png"
import pelota from "./img/pelota.png"
import rompevientos from "./img/rompevientos.png"
import short from "./img/short.png"
import suplente from "./img/suplente.png"
import taza from "./img/taza.png"
import titular from "./img/titular.png"

const ProductsData = [
    {
        id: 1,
        img: nuevo,
        price: 25000,
        title: "Camiseta Titular ",
        category: "Juego",
    },
    {
        id: 2,
        img: titular,
        title: "Camiseta Titular",
        price: 18900,
        category: "Juego"
    },
    {
        id: 3,
        img: suplente,
        title: "Camiseta Suplente",
        price: 18900,
        category: "Juego"
    },
    {
        id: 4,
        img: arquero,
        title: "Camiseta Arquero",
        price: 15900,
        category: "Juego"
    },
    {
        id: 5,
        img: muscuEntrenamiento,
        title: "Musculosa de Entrenamiento",
        price: 10500,
        category: "Juego"
    },
    {
        id: 6,
        img: short,
        title: "Short de Juego Titular",
        price: 9500,
        category: "Juego"
    },
    {
        id: 7,
        img: campera,
        title: "Campera de Entrenamiento",
        price: 17800,
        category: "Juego"
    },
    {
        id: 15,
        img: rompevientos,
        title: "Campera Rompevientos Pre-Match",
        price: 20200,
        category: "Juego"
    },
    {
        id: 8,
        img: chomba,
        title: "Chomba de Pique",
        price: 13500,
        category: "Casual"
    },
    {
        id: 9,
        img: chombaNegra,
        title: "Chomba Negra de Concentracion",
        price: 15500,
        category: "Casual"
    },
    {
        id: 10,
        img: musculosa,
        title: "Musculosa de Concentracion",
        price: 12500,
        category: "Casual"
    },
    {
        id: 11,
        img: camperaCasual,
        title: "Campera Bordada Negra",
        price: 16500,
        category: "Casual"
    },
    {
        id: 12,
        img: jogging,
        title: "Jogging de Concentracion",
        price: 14500,
        category: "Casual"
    },
    {
        id: 13,
        img: abrigo,
        title: "Campera de abrigo con pluma",
        price: 24500,
        category: "Casual"
    },
    {
        id: 14,
        img: camperon,
        title: "Camperon Negro",
        price: 30500,
        category: "Casual"
    },
    {
        id: 16,
        img: taza,
        title: "Taza Termica con Escudo",
        price: 7000,
        category: "Otros"
    },
    {
        id: 17,
        img: pelota,
        title: "Pelota N5 recreativa",
        price: 10000,
        category: "Otros"
    },
    {
        id: 18,
        img: gorra,
        title: "Gorra Blanca tipo Camionero",
        price: 8000,
        category: "Otros"
    }
]

export default ProductsData;

export const TotalProducts = ProductsData.length;

export const ProductsShow = ProductsData.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category].push(product);

  return acc;
}, {});


