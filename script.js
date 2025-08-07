
document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault();

  //Validación básica
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message){
    //Simulación de envío de formulario
    document.getElementById('successMessage').style.display = 'block';

    //Resetear el formulario
    document.getElementById('contactForm').reset();
  } else {
    alert('Por favor, completa los campos obligatorios');
  }
});                                                    
