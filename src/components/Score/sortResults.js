export default function sortScore(arr){
    return arr.sort((a, b) => {
      if (a.time > b.time) {
        return 1;
      } else if (a.time < b.time) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  