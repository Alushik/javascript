"use strict";
/**
 * Возводит x в целую степень n.
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени (целое число).
 * @returns {number} Результат x^n.
 */
function pow(x, n) {
    if (n === 0) return 1;
    const absN = Math.abs(n);
    let result = 1;
    for (let i = 0; i < absN; i++) {
        result *= x;
    }
    return n > 0 ? result : 1 / result;
}

/**
 * Вычисляет сумму чисел от 1 до n включительно.
 * @param {number} n - Натуральное число.
 * @returns {number} - Сумма чисел от 1 до n.
 */
const sumTo = new Function('n', 'return n * (n + 1) / 2;');

/**
 * Проверяет, является ли год високосным.
 * @param {number} year - Год для проверки.
 * @returns {boolean} - true, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа n.
 * @param {number} n - Неотрицательное целое число.
 * @returns {bigint} - Факториал числа n в виде BigInt.
 */
function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

/**
 * Вычисляет n-е число Фибоначчи.
 * @param {number} n - Порядковый номер числа.
 * @returns {bigint} - n-е число Фибоначчи в виде BigInt.
 */
function fib(n) {
    let a = 0n;
    let b = 1n;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}

/**
 * Возвращает функцию для сравнения с заданным значением x.
 * @param {number} x - Значение для сравнения.
 * @returns {function} - Функция, сравнивающая y с x.
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Возвращает сумму всех переданных аргументов.
 * @param {...number} args - Числа для суммирования.
 * @returns {number} - Сумма аргументов.
 */
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Добавляет символьное свойство blackSpot со значением true к объекту.
 * @param {Object} obj - Объект для модификации.
 * @returns {Object} Исходный объект с добавленным свойством.
 */
function addBlackSpot(obj) {
    obj[Symbol.for('blackSpot')] = true;
    return obj;
}