window.onload = function() {
  bubbly({
    colorStart: '#4c004c',
    colorStop: '#1a001a',
    bubbleFunc:() => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`
  });
};