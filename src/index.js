/* jshint esversion: 6 */
/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    var clone = [];
    
    for (let index = 0; index < array.length; index++) {
        clone.push(fn(array[index], index, array));
    }

    return clone;
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var clone = [];
    
    for (let index = 0; index < array.length; index++) {
        clone.push(fn(array[index], index, array));
    }

    return clone;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var x = initial || array[0],
        i = initial ? 0 : 1;

    for (; i < array.length; i++) {
        x = fn(x, array[i], i, array);
    }

    return x;
    // var result, buffer;
    // if (initial) {
    //     buffer = fn(initial, array[0], 0, array);
    //     for (let index = 0; index < array.length; index++) {
    //         result = fn(buffer, array[index], index, array);
    //     }
    //     return result;
    // } else {
    //     buffer = array[0];
    //     for (let index = 1; index < array.length; index++) {
    //         result = fn(buffer, array[index], index, array);
    //     }
    //     return result;
    // }
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return prop in obj;
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    return Object.keys(obj);
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var result = Object.keys(obj);
    
    return result.map(function(x) {
 return x.toUpperCase(); 
});
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    var count = to - from;
    var result = [];

    for (let i = 0; i < count-1; i++, from++) {
        result.push(array[from]);    
    }
    
    return result;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    var result = new Proxy (obj, {
        set(tar, prop, value) {
            tar[prop] = value * value;
            
            return true;
        }
    });
    
    return result;
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
