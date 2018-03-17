function initialize(callback, random = true) {
  var $row = document.createElement('div');
  $row.className = 'row';
  document.body.querySelector('.container').append($row);
  for(let i = 0; i <= 141; i++) {
    let $node = document.createElement('div');
    $node.className = 'cell';
    callback($node, random, i, 141);
    $row.appendChild($node);
  }

  setTimeout(initialize.bind(this, renderNext, random), 250);
}

function randomize($node, random, index, nodeCount) {
  var states = ["active", "inactive"];
  if (random === true) {
    $node.classList.add(states[Math.round(Math.random() * 1)]);
  } else if (index === Math.ceil(nodeCount / 2)) {
    $node.classList.add("active");
  } else {
    $node.classList.add("inactive");
  }
  return $node;
}

function renderNext($node, random, index, nodeCount) {
  let bTS = Rule73;
  let sTB = {
    'active': '1',
    'inactive': '0'
  };
  let $body = document.body.querySelector('.container');
  let $previousRow = $body.children[$body.childElementCount - 2];
  let left = $previousRow.children[index ? index - 1 : nodeCount];
  let prev = $previousRow.children[index];
  let right = $previousRow.children[index < nodeCount - 1 ? index + 1 : 0];
  $node.classList.add(bTS[sTB[left.classList.item(1)] + sTB[prev.classList.item(1)] + sTB[right.classList.item(1)]]);
}

var Rule150 = {
    '111': "active",
    '110': "inactive",
    '101': "inactive",
    '100': "active",
    '011': "inactive",
    '010': "active",
    '001': "active",
    '000': "inactive",
  };

  var Rule73 = {
    '111': "inactive",
    '110': "active",
    '101': "inactive",
    '100': "inactive",
    '011': "active",
    '010': "inactive",
    '001': "inactive",
    '000': "active",
  };