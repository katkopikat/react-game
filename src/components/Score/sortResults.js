export default function sortScore(arr){
    return arr.sort((a, b) => {
      if (a.time > b.time) return 1;
      if (a.time < b.time) return -1;
      return 0;
    });
  }
  