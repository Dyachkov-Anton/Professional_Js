/**  Задание 1
*		1. Создайте функцию mergeArrays, которая принимает два
		массива и возвращает новый массив, содержащий все
		элементы из обоих массивов. Используйте spread
		оператор для объединения массивов.
		mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]

*		2. Создайте функцию removeDuplicates, которая принимает
		любое количество аргументов и возвращает новый
		массив, содержащий только уникальные значения.
		Используйте rest оператор для сбора всех аргументов в
		массив а затем filter для определения дубликатов.
		removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
		результат: [1, 2, 3, 4, 5] */

// Задача 1

// const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// Задача 2

// const removeDuplicates = (...numbs) => {
// 	const arr = [...numbs];
// 	return arr.filter((el, index) => {
// 		return arr.indexOf(el) === index;
// 	});
// };

// const removeDuplicates = (...numbs) => {
// 	const uniqArr = [...new Set([...numbs])];
// 	return uniqArr;
// };

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

/** Задание 2 (Чистые функции 25минут)

*		1. Напишите функцию getEvenNumbers, которая принимает массив
		чисел в качестве аргумента и возвращает новый массив,
		содержащий только четные числа.

*		2. Задача: Напишите функцию calculateAverage, которая принимает
		массив чисел в качестве аргумента и возвращает среднее значение
		этих чисел.

*		3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
		качестве аргумента и возвращает новую строку, в которой первая
		буква каждого слова является заглавной.  */

// 1

// const getEvenNumbers = (arr) => {
// 	const newArr = arr.filter((el) => {
// 		if (el % 2 == 0) {
// 			return el;
// 		}
// 	});
// 	return newArr;
// };

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// 2

// const calculateAverage = (arr) => {
// 	const newArr = arr.reduce((acc, el) => {
// 		return acc + el;
// 	}, 1);

// 	return newArr / arr.length;
// };

// console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8]));

// 3

// const capitalizeFirstLetter = (str) => {
// 	return str.replace(/(^|\s)\S/g, (char) => char.toUpperCase());
// };

// console.log(capitalizeFirstLetter('привет, дорогой друг!!!'));

/** Задание 3 (Замыкания 20 минут)

*		1. Напишите функцию createCalculator, которая принимает начальное
		значение и возвращает объект с двумя методами: add и subtract.
		Метод add должен увеличивать значение на переданное число, а
		метод subtract должен уменьшать значение на переданное число.
		Значение должно быть доступно только через методы объекта, а не
		напрямую. */

// const createCalculator = (arg) => {
// 	return {
// 		add(numb) {
// 			console.log(arg + numb);
// 		},
// 		subtract: function (numb) {
// 			console.log(arg - numb);
// 		},
// 	};
// };

// const calc = createCalculator(20);
// calc.add(8);
// calc.subtract(7);

/** Задание 4 (Лексический контекст 15 минут)

*		1. Напишите функцию createGreeting, которая принимает имя
		пользователя и возвращает функцию, которая будет выводить
		приветствие с использованием этого имени.
		// Пример использования:
		const greeting = createGreeting('John');
		greeting(); // Ожидаемый результат: "Hello, John!" */

// const createGreeting = (name) => {
// 	const greeting = () => `Hello, ${name}`;
// 	return greeting();
// };

// const greeting = createGreeting('John');
// console.log(greeting);

/** Задание 6 (Рекурсия 25 минут)

*		1. Напишите рекурсивную функцию sumDigits, которая принимает
		положительное целое число в качестве аргумента и возвращает
		сумму его цифр.

		// Пример использования:
		console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
		console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
		+ 7 + 8 + 9) */

const sumDigits = (num) => {
	if (num < 10) {
		return num;
	} else {
		return (num % 10) + sumDigits(Math.floor(num / 10));
	}
};

console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)
