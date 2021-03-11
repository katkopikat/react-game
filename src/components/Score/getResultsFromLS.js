const getResultsfromLS = () => {
    const result = [];
    let j = 1;
    for (let key in localStorage) {
      if (key.match(/result/)) {
        const obj = JSON.parse(localStorage.getItem(`result${j}`)); 
        result.push(obj);
        j += 1;
      }
    }
    return result;
  }

  export default getResultsfromLS;