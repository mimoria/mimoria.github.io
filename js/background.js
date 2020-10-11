window.onload = function() {
  bubbly({
    colorStart: '#4c004c',
    colorStop: '#1a001a',
    bubbleFunc:() => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`
  });
  new Typed('.mainText', {
    strings: ['Dear M^1000\n\n' +
      '24才の誕生日おめでとう😊^1000\n' +
      'いつも一緒に遊んでくれて\n' +
      'ありがとうございます(笑)🙇^1000\n' +
      '今年も誕生日を一緒にお祝いできて\n' +
      'とても嬉しいです！！^1000\n' +
      'これから仕事も忙しくなるかもだけど\n' +
      'あまり無理をしないようにね✋^1000\n' +
      '何かあったら何でも言ってねー(^-^)/^1000\n' +
      'ではでは　良い一日を👍^1000\n' +
      '\nFrom H\n' +
      'p.s. ちゃんと表示されてなかったら\n' +
      'ゴメンね😋'],
    typeSpeed: 50,
    backSpeed: 0,
    loop: false
  });
};
