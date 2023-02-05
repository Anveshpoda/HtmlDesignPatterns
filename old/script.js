const container = document.querySelector(".container");
const dots = [];
const lines = [];
let dotCount = 15; // Number of dots
let lineCount = dotCount*(dotCount-1)/2; // Number of lines

// Create dots
for (let i = 0; i < dotCount; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  container.appendChild(dot);
  dots.push(dot);
}

// Create lines
for (let i = 0; i < dotCount; i++) {
    for (let j = i+1; j < dotCount; j++) {
        const line = document.createElement("div");
        line.classList.add("line");
        container.appendChild(line);
        lines.push(line);
    }
}

// Move dots randomly on the screen
setInterval(() => {
  for (let dot of dots) {
    setTimeout(() => { /* Add this line to control the speed of the dot's movement */
      dot.style.left = Math.random() * (screen.width - 20) + "px"; /* set the maximum value of left to 480px */
      dot.style.top = Math.random() * (screen.height - 20) + "px"; /* set the maximum value of top to 480px */
    }, 1000);
  }
}, 1000); /* Change the interval time to control the speed of the dot's movement */

// Connect dots with lines
setInterval(() => {
  for (let i = 0; i < dotCount; i++) {
    for (let j = i+1; j < dotCount; j++) {
      const dot1 = dots[i];
      const dot2 = dots[j];
      const line = lines[i*(dotCount-1)-(i*(i+1)/2)+(j-1)];
      line.style.left = (dot1.offsetLeft + 7) + "px";
      line.style.top = (dot1.offsetTop + 7) + "px";
      line.style.transform = `rotate(${
        Math.atan2(
          dot2.offsetTop - dot1.offsetTop,
          dot2.offsetLeft - dot1.offsetLeft
        ) *
        (180 / Math.PI) - 90
      }deg)`;
      line.style.height = `${Math.sqrt(
        Math.pow(dot1.offsetLeft - dot2.offsetLeft, 2) +
          Math.pow(dot1.offsetTop - dot2.offsetTop, 2)
      )}px`;

      line.style.transformOrigin = "left top";
    }
  }
}, 10);
