const playPauseButton = document.querySelector('.play-pause-button');

playPauseButton.addEventListener('click', () => {
  playPauseButton.classList.toggle('playing');
  // Agrega aquí la lógica para reproducir/pausar la música en tu reproductor real
});
