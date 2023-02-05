const nodes = document.querySelectorAll(".node");
const container = document.querySelector(".container");

const connectNodes = (node1, node2) => {
  const x1 = node1.offsetLeft + node1.offsetWidth / 2;
  const y1 = node1.offsetTop + node1.offsetHeight / 2;
  const x2 = node2.offsetLeft + node2.offsetWidth / 2;
  const y2 = node2.offsetTop + node2.offsetHeight / 2;

  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const line = document.createElement("div");
  line.classList.add("line");
  line.style.transform = `rotate(${angle}deg)`;
  line.style.width = `${length}px`;
  line.style.left = `${x1}px`;
  line.style.top = `${y1}px`;
  container.appendChild(line);
}

connectNodes(nodes[0], nodes[1]);
connectNodes(nodes[1], nodes[2]);
connectNodes(nodes[2], nodes[0]);
connectNodes(nodes[2], nodes[3]);
connectNodes(nodes[3], nodes[0]);
