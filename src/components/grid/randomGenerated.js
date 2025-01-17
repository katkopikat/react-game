const randomGeneratedField = (difficulty) => {
    let dif;
    switch (difficulty) {
        case 'cross-check':
            dif = 0.8;
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
    // Base string for future random field generation. Code took here: https://habr.com/ru/sandbox/74712/
    const field = '0681594327597283416342671589934157268278936145156842973729318654813465792465729831';
    const sudokuArray = Array(1,2,3,4,5,6,7,8,9);
    for (let j = 0; j < 9; j += 1 ) {
        sudokuArray.push(sudokuArray.splice((Math.random() * sudokuArray.length), 1));
    }

        for (let y = 0; y < 9; y++ ){
            for (let x = 0; x < 9; x++ ){
                const val =  Math.random() * 10 > dif;
                let prop = {
                    x,
                    y,
                    s: parseInt(y / 3) * 3 + parseInt(x / 3),
                    id: idCount-1,
                    value: val? String(+sudokuArray[field.substr(idCount,1)-1]) : '',
                    readOnly: !!val,
                    error: 'false'
                }
                baseField.push(prop)  
                idCount++;
            }
        }
     return baseField;
}

export default randomGeneratedField;