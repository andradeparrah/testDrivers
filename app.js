document.getElementById('read').addEventListener('click', function() {
  var btn = document.getElementById('read');
  if (btn.innerHTML === 'Leí la información') {
    btn.innerHTML = 'Confirmar';
  } else {
    window.location.href = 'fotos.html';
  }
});
