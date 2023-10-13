function whoseMove(lastPlayer, win) {
  
  return win === true ? lastPlayer : 
    lastPlayer === 'black' ? 'white' : 'black' 
  
}

console.log(whoseMove('white', true))

// params: lastPlayer, win     // string, boolean
// return: nextPlayer    // string 
// e.g. whoseMove('black', true)
// results in 'black'

// ternary expression
// if win equals true return lastPLayer
// else if lastPlayer equals 'black' return 'white'
// else if lastPlayer equals 'white' return 'black'
