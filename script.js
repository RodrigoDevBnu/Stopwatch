let minutos = 0;
  let segundos = 0;
  let milissegundos = 0;
  let cronometro;

  function atualizarCronometro() {
    milissegundos += 10;
    if (milissegundos === 1000) {
      milissegundos = 0;
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
    }

    document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');
    document.getElementById("milissegundos").innerText = milissegundos.toString().padStart(3, '0');
  }

  function iniciarCronometro() {
    document.getElementById("apito").play();
    cronometro = setInterval(atualizarCronometro, 10);
  }

  function pararCronometro() {
    document.getElementById("claps").play();
    clearInterval(cronometro);
  }

  function reiniciarCronometro() {
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    document.getElementById("minutos").innerText = "00";
    document.getElementById("segundos").innerText = "00";
    document.getElementById("milissegundos").innerText = "000";
  }