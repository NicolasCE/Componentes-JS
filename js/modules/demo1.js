export default {
    saludos: [],
    data: `
      
          <h1>Demo 1</h1>
          Nombre<br>
          <input id="txt" type="text" placeholder="Tu nombre"/>
          <button onclick="saludar()">saludar</button>
          <p id="resp"></p>
    `,
    saludar: () => {
      var nombre = document.getElementById("txt").value;
      var resp = document.getElementById("resp");
  
      if (nombre == "") {
        resp.innerHTML = "completa tu nombre";
      } else {
        resp.innerHTML = `Hola ${nombre}`;
        this.saludos.push(`Hola ${nombre}`);
        console.log(this.saludos);
      }
    },
  };