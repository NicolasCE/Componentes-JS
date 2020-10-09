export default {
  data: `
        <h1>Demo 2</h1>
        Precio<br>
        <input id="txt" type="number"/>
        <br><br>
        Descuento<br>
        <select id="desc">
            <option value="0">0%</option>
            <option value="0.1">10%</option>
            <option value="0.3">30%</option>
            <option value="0.5">50%</option>
        </select>
        <br><br>
        <button onclick="calcular()">Calcular</button>
        <p id="resp"></p>
    `,
  calcular: () => {
    var precio = document.getElementById("txt").value;
    var desc = document.getElementById("desc").value;
    var resp = document.getElementById("resp");

    resp.style.color = "white";
    resp.style.padding = "10px";
    resp.style.width = "300px";
    if (precio != "" && precio > 0) {
      resp.style.background = "blue";
      var valor_desc = precio * desc;
      var total = precio - valor_desc;
      resp.innerHTML = `Descuento: $${valor_desc.toFixed(
        0
      )}, Paga: $${total.toFixed(0)}`;
    } else {
      resp.style.background = "red";
      resp.innerHTML = "precio incorrecto";
    }
  },
};