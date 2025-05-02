// import "../styles/ProductsDog.css";

function Cart() {
  return (
    <div className="whrapper">
      <aside>
        <header>
          <h1 className="logo">Perros</h1>
        </header>
        <nav>
          <ul>
            <li>
              <a className="boton-menu boton-volver" href="ProductsDog.jsx">
                Seguir comprando
              </a>
            </li>
            <li>
              <a className="boton-menu boton-carrito active" href="Cart.jsx">
                <i class="bi bi-cart-fill"></i>
                Carrito <span className="numCarrito">0</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        <h2 className="titulo-principal">Carrito</h2>
        <div className="contenedor-carrito">
          <p className="carrito-vacio">Tu carrito está vacío</p>
          <div className="carrito-productos disable">
            <div className="carrito-producto">
              <img
                className="carrito-producto-imagen"
                src="./img/sashagrey.jpg"
                alt=""
              />
              <div className="carrito-producto-titulo">
                <small>Título</small>
                <h3>Croquetas 01 </h3>
              </div>
              <div className="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>1</p>
              </div>
              <div className="carrito-producto-precio">
                <small>Precio</small>
                <p>S/10.00</p>
              </div>
              <div className="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>S/10.00</p>
              </div>
              <button className="carrito-producto-eliminar">
                <i class="bi bi-trash3"></i>
              </button>
            </div>
            <div className="carrito-producto">
              <img
                className="carrito-producto-imagen"
                src="./img/sashagrey.jpg"
                alt=""
              />
              <div className="carrito-producto-titulo">
                <small>Título</small>
                <h3>Croquetas 02 </h3>
              </div>
              <div className="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>2</p>
              </div>
              <div className="carrito-producto-precio">
                <small>Precio</small>
                <p>S/10.00</p>
              </div>
              <div className="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>S/20.00</p>
              </div>
              <button className="carrito-producto-eliminar">
                <i class="bi bi-trash3"></i>
              </button>
            </div>
          </div>
          <div className="carrito-acciones disable">
            <div className="carrito-acciones-izquierda">
              <button className="carrito-acciones-vaciar">
                Vaciar Carrito
              </button>
            </div>
            <div className="carrito-acciones-derecha">
              <div className="carrito-acciones-total">
                <p>Total: </p>
                <p className="total">S/30.00</p>
              </div>
              <button className="carrito-acciones-comprar">
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Cart;
