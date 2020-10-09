export default {
    data: `
          <h1>Demo 3</h1>
          Nombre<br>
          <input id="txt" type="text" />
          <br><br>
          Estado Civil<br>
          <input id="rd1" type="radio" name="grupo" value="SOLTER@" checked  /> Solter@
          <input id="rd2" type="radio" name="grupo" value="CASAD@" /> Casad@
          <input id="rd3" type="radio" name="grupo" value="VIUD@" /> Viud@
          <br><br>
          <button onclick="procesar()">Procesar</button>
          <p id="resp"></p>
      `,
    procesar: () => {
      var nombre = document.getElementById("txt").value;
      var resp = document.getElementById("resp");
      var opciones = document.getElementsByName("grupo");
      var estadoCivil = "";
  
      opciones.forEach((item) => {
        if (item.checked) {
          estadoCivil = item.value;
        }
      });
  
      if (nombre != "") {
        resp.innerHTML = `Hola ${nombre} eres ${estadoCivil}`;
      } else {
        resp.innerHTML = "complete el nombre";
      }
    },
  };