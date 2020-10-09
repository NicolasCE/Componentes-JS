export default {
    mascotas: [
      { nombre: "Boby", tipo: "Perro", peso: 3.5 },
      { nombre: "Terry", tipo: "Perro", peso: 3.5 },
      { nombre: "Simba", tipo: "Gato", peso: 1.5 },
      { nombre: "Toby", tipo: "Gato", peso: 1.5 },
    ],
    data: `
      <h1>Demo de Mascotas</h1>
      Nombre <br />
      <input id="txt1" type="text" /> <br />
      Tipo <br />
      <select id="txt2">
          <option value="">Seleccione </option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
      </select>
      <br />
      Peso <br />
      <input id="txt3" type="number" /> <br />
      <button onclick='agregar()'>Add</button>
      <br /><br />
      <div id="result"></div>
    `,
  
    data2: `
      <h1>Buscar Mascota</h1>
      nombre<br />
      <input id="txt1" type="text"/><br/>
      <button onclick="buscar()">buscar</button>
      <br>
      <div id="result"></div>
    `,
    buscar: function () {
      var nombre = document.getElementById("txt1").value;
      var result = document.getElementById("result");
      var arr = this.mascotas.filter((mascota) => mascota.nombre == nombre);
  
      if (arr.length == 0) {
        result.innerHTML = "Mascota no encontrada";
      } else {
        result.innerHTML = `
              Nombre: ${arr[0].nombre}<br>
              Tipo  : ${arr[0].tipo}<br>
              Peso  : ${arr[0].peso} kg<br>
          `;
      }
    },
    cargar: function () {
      var result = document.getElementById("result");
      var tabla = `
              <table border='1' width='400'>
                  <tr>
                      <th>Nombre</th>
                      <th>Tipo</th>
                      <th>Peso</th>
                  </tr>
        `;
  
      this.mascotas.forEach((item) => {
        tabla += `
              <tr>
                <td>${item.nombre}</td>
                <td>${item.tipo}</td>
                <td>${item.peso}</td>
              </tr>
            `;
      });
  
      tabla += "</table>";
  
      result.innerHTML = tabla;
    },
    agregar: function () {
      var nombre = document.getElementById("txt1");
      var tipo = document.getElementById("txt2");
      var peso = document.getElementById("txt3");
  
      if (nombre.value != "" && tipo.value != "" && peso.value != "") {
        var obj = {
          nombre: nombre.value,
          tipo: tipo.value,
          peso: peso.value,
        };
        this.mascotas.push(obj);
        this.cargar();
        nombre.value = "";
        tipo.value = "";
        peso.value = "";
      } else {
        alert("complete los campos");
      }
    },
  };