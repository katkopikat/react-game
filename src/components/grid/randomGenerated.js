const randomGeneratedField = (difficulty) => {
    let dif;
    switch (difficulty) {
        case 'cross-check':
            dif = 2;
            break;
        case 'easy':
            dif = 4;
            break;
        case 'medium':
            dif = 6;
            break;
        case 'hard':
            dif = 8;
            break;
        default:
            dif = 6;
            break;
    }

        let idCount = 1;
        const baseField = [];
        var field = '0681594327597283416342671589934157268278936145156842973729318654813465792465729831';
        var sudokuArray = Array(1,2,3,4,5,6,7,8,9);
        for (var j=0;j<9;j++) sudokuArray.push(sudokuArray.splice((Math.random() * sudokuArray.length), 1));
        let startArray = [];
        for (let y = 0; y < 9; y++ ){
            for (let x = 0; x < 9; x++ ){
                let prop = {
                    x,
                    y,
                    s: parseInt(y / 3) * 3 + parseInt(x / 3),
                    id: idCount-1,
                    value: Math.random()*10>dif ? String(+sudokuArray[field.substr(idCount,1)-1]) : '',
                    readOnly: Boolean(Math.random()*10 > dif),
                }
                baseField.push(prop)  
                startArray.push(prop.value)
                idCount++;
            }
        }
     const result = {
        baseField,
        startArray
     }
     return result;
}

export default randomGeneratedField;