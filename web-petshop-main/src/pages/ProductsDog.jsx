import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import "../styles/ProductsDog.css";

/*Alimento*/
import alimento1 from "../assets/img-productsDog/alimento-1.jpg";
import alimento2 from "../assets/img-productsDog/alimento-2.jpg";
import alimento3 from "../assets/img-productsDog/alimento-3.jpg";
import alimento4 from "../assets/img-productsDog/alimento-4.jpg";
import alimento5 from "../assets/img-productsDog/alimento-5.jpg";
import alimento6 from "../assets/img-productsDog/alimento-6.jpg";

/*Accesorios*/
import accesorio1 from "../assets/img-productsDog/accesorio-1.jpg";
import accesorio2 from "../assets/img-productsDog/accesorio-2.jpg";
import accesorio3 from "../assets/img-productsDog/accesorio-3.jpg";
import accesorio4 from "../assets/img-productsDog/accesorio-4.jpg";

/*Juguetes*/
import juguete1 from "../assets/img-productsDog/juguete-1.jpg";
import juguete2 from "../assets/img-productsDog/juguete-2.jpg";
import juguete3 from "../assets/img-productsDog/juguete-3.jpg";

/*Carrusel*/
import Carrusel1 from "../assets/img-productsDog/carrusel-1.jpg";
import Carrusel2 from "../assets/img-productsDog/carrusel-2.jpg";
import Carrusel3 from "../assets/img-productsDog/carrusel-3.jpg";

function ProductsDog() {
  /*Lógica para mi banner*/
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Carrusel1, Carrusel2, Carrusel3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  /*Lógica para Whrapper*/
  const productosArray = [
    /*Alimento*/
    {
      id: "Alimento-01",
      titulo: "Croquetas RicoHub - 4kg",
      imagen: alimento1,
      categoria: {
        nombre: "Alimento",
        id: "alimento",
      },
      precio: 56,
    },
    {
      id: "Alimento-02",
      titulo: "Paté Ricocan - 330gr",
      imagen: alimento2,
      categoria: {
        nombre: "Alimento",
        id: "alimento",
      },
      precio: 6.5,
    },
    {
      id: "Alimento-03",
      titulo: "Snack RicoCrack - 220gr",
      imagen: alimento3,
      categoria: {
        nombre: "Alimento",
        id: "alimento",
      },
      precio: 8.0,
    },
    {
      id: "Alimento-04",
      titulo: "Croquetas Canbo - 2kg",
      imagen: alimento4,
      categoria: {
        nombre: "Alimento",
        id: "alimento",
      },
      precio: 20.5,
    },
    {
      id: "Alimento-05",
      titulo: "Snack Carnitas - 100gr",
      imagen: alimento5,
      categoria: {
        nombre: "Alimento",
        id: "alimento",
      },
      precio: 20.5,
    },
    {
      id: "Alimento-06",
      titulo: "Croquetas Ricocan Perro Adulto - 15kg",
      imagen: alimento6,
      categoria: {
        nombre: "Alimento",
        id: "alimento",
      },
      precio: 94.9,
    },
    /*Accesorios*/
    {
      id: "Accesorios-01",
      titulo: "Arnés - Perro: Pequeño/Adulto",
      imagen: accesorio1,
      categoria: {
        nombre: "Accesorios",
        id: "accesorios",
      },
      precio: 20,
    },
    {
      id: "Accesorios-02",
      titulo: "Collar Led",
      imagen: accesorio2,
      categoria: {
        nombre: "Accesorios",
        id: "accesorios",
      },
      precio: 30,
    },
    {
      id: "Accesorios-03",
      titulo: "Cama - Perro: Pequeño/Adulto",
      imagen: accesorio3,
      categoria: {
        nombre: "Accesorios",
        id: "accesorios",
      },
      precio: 60,
    },
    {
      id: "Accesorios-04",
      titulo: "Transportador 100x67x75 cm",
      imagen: accesorio4,
      categoria: {
        nombre: "Accesorios",
        id: "accesorios",
      },
      precio: 60,
    },
    /*Juguetes */
    {
      id: "Juguetes-01",
      titulo: "Hueso Deshidratado de Cordero",
      imagen: juguete1,
      categoria: {
        nombre: "Juguetes",
        id: "juguetes",
      },
      precio: 30,
    },
    {
      id: "Juguetes-02",
      titulo: "Pelota Interactiva",
      imagen: juguete2,
      categoria: {
        nombre: "Juguetes",
        id: "juguetes",
      },
      precio: 60,
    },
    {
      id: "Juguetes-03",
      titulo: "Peluches Variados",
      imagen: juguete3,
      categoria: {
        nombre: "Juguetes",
        id: "juguetes",
      },
      precio: 20,
    },
  ];

  /*Prueba, si no sirve lo elimino*/
  const [activeCategory, setActiveCategory] = useState("all"); // Categoría activa
  const [filteredProducts, setFilteredProducts] = useState(productosArray); // Productos filtrados

  const filterProducts = (categoryId) => {
    setActiveCategory(categoryId);

    if (categoryId === "all") {
      setFilteredProducts(productosArray);
    } else {
      const filtered = productosArray.filter(
        (product) =>
          product.categoria.id.toLowerCase() === categoryId.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };
  /* */

  return (
    <div className="Principal">
      {/*Mi carrusel*/}
      <div className="carrusel">
        <img
          src={images[currentImageIndex]}
          alt={`Banner ${currentImageIndex + 1}`}
          className="carrusel-img"
        />
      </div>

      {/*Mis categorias*/}
      <div className="mercadito">
        <aside>
          <header>
            <h1 className="logo">Perros</h1>
          </header>
          <nav>
            <ul className="menu">
              <li>
                <button
                  className={`boton-menu boton-categoria ${
                    activeCategory === "all" ? "active" : ""
                  }`}
                  onClick={() => filterProducts("all")}
                >
                  <i className="bi bi-bag-dash"></i> Todos los productos
                </button>
              </li>
              <li>
                <button
                  className={`boton-menu boton-categoria ${
                    activeCategory === "alimento" ? "active" : ""
                  }`}
                  onClick={() => filterProducts("alimento")}
                >
                  <i className="bi bi-bag"></i> Alimento
                </button>
              </li>
              <li>
                <button
                  className={`boton-menu boton-categoria ${
                    activeCategory === "accesorios" ? "active" : ""
                  }`}
                  onClick={() => filterProducts("accesorios")}
                >
                  <i className="bi bi-bag"></i> Accesorios
                </button>
              </li>
              <li>
                <button
                  className={`boton-menu boton-categoria ${
                    activeCategory === "juguetes" ? "active" : ""
                  }`}
                  onClick={() => filterProducts("juguetes")}
                >
                  <i className="bi bi-bag"></i> Juguetes
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main>
          <h2 className="titulo-principal">
            {activeCategory === "all"
              ? "Todos los productos"
              : productosArray.find((p) => p.categoria.id === activeCategory)
                  ?.categoria.nombre || "Productos"}
          </h2>

          <div className="contenedor-productos">
            {filteredProducts.map((product) => (
              <div key={product.id} className="producto">
                <img
                  className="producto-imagen"
                  src={product.imagen}
                  alt={product.titulo}
                />
                <div className="producto-detalles">
                  <h3 className="producto-titulo">{product.titulo}</h3>
                  <p className="producto-precio">S/ {product.precio}</p>
                  <button className="producto-agregar">Agregar</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductsDog;
