window.onload = function() {
  bubbly({
    colorStart: '#4c004c',
    colorStop: '#1a001a',
    bubbleFunc:() => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`
  });
  new Typed('.mainText', {
    strings: ['To M^1000\n\n いつもお世話になっております。^1000\n\n From H^1000'],
    typeSpeed: 40,
    backSpeed: 0,
    loop: false
  });
};