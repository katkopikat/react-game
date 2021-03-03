const getResultsfromLS = () => {
    let res = [];
    let j = 1;
    for (let key in localStorage) {
      if (key.match(/result/)) {
        let obj = JSON.parse(localStorage.getItem(`result${j}`)); 
        res.push(obj);
        j += 1;
      }
    }
    return res;
  }

  export default getResultsfromLS;