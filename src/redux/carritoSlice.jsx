import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productos: [],
  total: 0,
};

const medidas = {
  uni: 1,
  // gr: 0.1,
  kg: 0.25,
};

const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    agregarProducto: (state, action) => {
      const medidaProducto = action.payload;
      const cantidadAgregar = medidas[medidaProducto.medida] === 1 ? 1 : 0.25;
      const productoExiste = state.productos.find(
        (producto) => producto.id === medidaProducto.id
      );
      if (productoExiste) {
        productoExiste.cantidad += cantidadAgregar;
      } else {
        const productoNuevo = { ...medidaProducto, cantidad: cantidadAgregar };
        state.productos = [...state.productos, productoNuevo];
      }
      state.total += medidaProducto.precio * cantidadAgregar;
    },
    disminuirProducto: (state, action) => {
      const medidaProducto = action.payload;
      const cantidad = medidas[medidaProducto.medida] === 1 ? 1 : 0.25;
      const productoCarrito = state.productos.find(
        (prod) => prod.id === medidaProducto.id
      );
      const cantidadAnterior = productoCarrito ? productoCarrito.cantidad : 0;
      if (productoCarrito && productoCarrito.cantidad > cantidad) {
        productoCarrito.cantidad -= cantidad;
        state.total -= cantidad * productoCarrito.precio;
      } else if (productoCarrito) {
        state.total -= productoCarrito.precio * cantidadAnterior;
        state.productos = state.productos.filter(
          (prod) => prod.id !== medidaProducto.id
        );
      }
    },
    eliminarProducto: (state, action) => {
      const productoExiste = action.payload;
      productoExiste.cantidad > 0
        ? ((state.productos = state.productos.filter(
            (prod) => prod.id !== productoExiste.id
          )),
          (state.total -= productoExiste.precio * productoExiste.cantidad))
        : ((state.productos = []), (state.total = 0));
    },
    vaciarCarrito: () => {
      return initialState;
    },
  },
});

export const {
  agregarProducto,
  disminuirProducto,
  eliminarProducto,
  vaciarCarrito,
} = carritoSlice.actions;

export default carritoSlice.reducer;
