document.querySelectorAll('.candle').forEach(candle => {
  candle.addEventListener('click', () => {
    candle.classList.add('out');
  });
});

