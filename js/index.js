import demo1 from "./modules/demo1.js";
import demo2 from "./modules/demo2.js";
import demo3 from "./modules/demo3.js";
import demo4 from "./modules/demo4.js";

var caja = document.getElementById("caja");

window.saludar = demo1.saludar;
window.calcular = demo2.calcular;
window.procesar = demo3.procesar;
window.cargar = demo4.cargar;
window.agregar = demo4.agregar.bind(demo4);
window.buscar = demo4.buscar.bind(demo4);

document.getElementById("demo1").addEventListener("click", () => {
  caja.innerHTML = demo1.data;
});

document.getElementById("demo2").addEventListener("click", () => {
  caja.innerHTML = demo2.data;
});

document.getElementById("demo3").addEventListener("click", () => {
  caja.innerHTML = demo3.data;
});

document.getElementById("demo4").addEventListener("click", () => {
  caja.innerHTML = demo4.data;
  demo4.cargar();
});

document.getElementById("demo5").addEventListener("click", () => {
  caja.innerHTML = demo4.data2;
});