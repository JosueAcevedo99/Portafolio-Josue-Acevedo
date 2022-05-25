document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var cel = document.getElementById('phone').value;
    if(cel.length > 13) {
      alert('Por favor escribe un celular válido');
      return;
    }
    this.submit();
  }
  