/**
 * Возвращает дробную часть числа
 * @param {number} num - Исходное число
 * @returns {number} - Дробная часть числа
 */
export function getDecimal(num) {
    const decimal = num - Math.floor(num);
    return parseFloat(decimal.toFixed(10)); 
}

/**
 * Возвращает адрес с добавлением https:// в начале
 * @param {string} url - Исходный адрес
 * @returns {string} - Изменённый адрес
 */
export function normalizeUrl(url) {
    if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    }
    if (url.startsWith('https://')) {
        return url;
    }
    return 'https://' + url;
}

/**
 * Возвращает true, если строка содержит 'viagra' или 'XXX'
 * @param {string} str - Исходная строка
 * @returns {boolean} - Значение true or false
 */
export function checkSpam(str){
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Проверяет длину строки и добавляет многоточие, если необходимо
 * @param {string} str - Исходная строка
 * @param {number} maxlength - Максимальная длина строки
 * @returns {string} - Усеченная строка
 */
export function truncate(str, maxlength){
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку, удаляя дефис и все слова после него получают заглавную букву
 * @param {string} str - Исходная строка
 * @returns {string} - Изменнёная строка
 */
export function camelize(str) {
  return str
    .split('-')                        
    .filter(part => part !== '')         
    .map((part, index) => {            
      return index === 0 
        ? part 
        : part[0].toUpperCase() + part.slice(1)
    })
    .join('');                
}

/**
 * Вычисляет n-е число Фибоначчи
 * @param {number} n - Количество чисел Фибоначчи
 * @returns {bigint[]} Массив чисел Фибоначчи
 */
export function fibs(n) {
    if (n <= 0) return [];
    const result = [0n, 1n];
    for (let i = 2; i < n; i++) {
        result.push(result[i-1] + result[i-2]);
    }
    return result.slice(0, n);
}

/**
 * Распологает массив в порядке убывания
 * @param {number[]} arr - Исходный массив
 * @returns {number[]} - Новый массив
 */
export function arrReverseSorted(arr){
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращаяет массив с уникальными значениями
 * @param {any[]} arr - Исходный массив
 * @returns {any[]} - Новый массив
 */
export function unique(arr){
    return [...new Set(arr)];
}