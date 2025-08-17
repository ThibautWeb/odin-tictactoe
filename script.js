const gameboard = (function () {

  const array = [
    "", "", "",
    "", "", "",
    "", "", "",
  ]

  function promptPlayer(player) {
    const i = parseInt(prompt("Choose a cell (1-9)"))
    if (array[i-1] === "") {
      array[i-1] = player.mark
      displayBoard()
      if (isWinner(player)) console.log(player + " wins!")
    } else {
      console.log(i + " is already marked")
    }
  }

  function isWinner(player) {
    let a = array
    let m = player.mark
    if (
      (a[0] == m && a[1] == m && a[2] == m) ||
      (a[3] == m && a[4] == m && a[5] == m) ||
      (a[6] == m && a[7] == m && a[8] == m) ||
      (a[0] == m && a[3] == m && a[6] == m) ||
      (a[1] == m && a[4] == m && a[7] == m) ||
      (a[2] == m && a[5] == m && a[8] == m) ||
      (a[0] == m && a[4] == m && a[8] == m) ||
      (a[2] == m && a[4] == m && a[6] == m)
    ) {
      return true
    }
  }

  function displayBoard() {
    console.log(array.slice(0,3))
    console.log(array.slice(3,6))
    console.log(array.slice(6,9))
  }

  return {promptPlayer}
})()

function createPlayer(name, mark) {
  return {name, mark}
}

const player1 = createPlayer("player1", "X")
const player2 = createPlayer("player2", "O")
