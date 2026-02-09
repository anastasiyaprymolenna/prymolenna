const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index) => {
  panel.style.setProperty('--delay', `${index * 0.04}s`);
});
