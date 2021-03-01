export default function checkGameInLS () {
    let i = 0;
    for (let key in localStorage) {
      if(key.match(/sudoku/)){
        i++;
      }
    }
    return i ? true : false;
  }