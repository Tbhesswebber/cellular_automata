function initialize(random = true) {
  let $row = document.body.querySelector('.row');
  for(let i = 0; i <= 69; i++) {
    let $node = document.createElement('div');
    $node.className = 'cell';
    randomize($node, random, i, 69);
    $row.appendChild($node);
  }
}

function randomize(node, random, index, nodeCount) {
  var states = ["active", "inactive"];
  if (random === true) {
    node.classList.add(states[Math.round(Math.random() * 1)]);
  } else if (index === Math.ceil(nodeCount / 2)) {
    node.classList.add("active");
  } else {
    node.classList.add("inactive");
  }
  return node;
}