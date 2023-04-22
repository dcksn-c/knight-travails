function Node(pos, path) {
    if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
      return null;
    }
    return { pos, path };
  }
  
  function knightMoves([x, y], [a, b]) {
    // create a node that has start location as pos, and also include that start location in path (to print out later)
    let q = [Node([x, y], [[x, y]])];
    let currentNode = q.shift(); // q = []
    console.log(q)
    
    // when start location is not equal to target location
    while (currentNode.pos[0] !== a || currentNode.pos[1] !== b) {
      //console.log(currentNode)
      //console.log(q)
      // possible moves
      let moves = [
        [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
        [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
        [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
        [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
        [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
        [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
        [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
        [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
      ];
      moves.forEach((move) => {
        // create a node that keeps track of all possible moves by adding them into path array
        let node = Node(move, currentNode.path.concat([move]));
        // if the node is not null (did not go out of board)
        if (node) {
          // push the node into q array
          q.push(node);
        }
      });
      //console.log(q)
      currentNode = q.shift();
      //console.log(currentNode)
    }
    //console.log(currentNode)
    console.log(
      `=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`
    );
    currentNode.path.forEach((pos) => {
      console.log(pos);
    });
  }
  knightMoves([3, 3], [1, 2]);