function getRandomColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
  }
  
  function changeBackgroundColor() {
      document.body.style.backgroundColor = getRandomColor();
  }
  
  setInterval(changeBackgroundColor, 1000);
  