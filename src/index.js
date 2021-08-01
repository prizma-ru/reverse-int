module.exports = function reverse(n) {
    let realDigits = Math.abs(n).toString().split('').map(Number); //делаем из числа массив чисел разделаем на символы потом преобразуем строки к числам
    /* realDigits.sort(function (a, b) { return b - a; });  */
    let newN = [];
    for (let i = 0; i < realDigits.length; ++i) {
        newN.unshift(realDigits[i]); //Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
    }
    return Number(newN.join('')); // склеиваем массив и преобразуем строку в число  
}