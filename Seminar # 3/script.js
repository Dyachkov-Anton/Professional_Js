// /*
// 	Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.
// */

// const getPrototypeChain = (obj) => {
// 	let prototypes = [];

// 	while (obj !== null) {
// 		prototypes.push(obj);
// 		obj = Object.getPrototypeOf(obj);
// 	}

// 	return prototypes;
// };

// const string = 'Привет';

// console.log(getPrototypeChain({ arg1: 100500 }));
// console.log({ arg1: 100500 });
// console.log([]);
// console.log(123);

// /*
// 	Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
// */

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	speak() {
// 		console.log(`${this.name} издаёт звук`);
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, breed) {
// 		super(name);
// 		this.breed = breed;
// 	}

// 	fetch() {
// 		console.log(`${this.name} породы ${this.breed} принёс мяч`);
// 	}
// }

// const animal1 = new Animal('Животное');
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog('Бобик', 'Дворняжка');
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

// console.log(dog1);

// class newMath extends Object {
// 	add() {
// 		return a + b;
// 	}
// 	div() {
// 		return a - b;
// 	}
// }

// const calc = new newMath();
// console.log(calc);

const moveTo = new MoveTo({
	duration: 5000,
});

const btn = document.querySelector('.btn1');

moveTo.registerTrigger(btn);

// ////////////

console.log(_.chunk(['a', 'b', 'c', 'd', 1, 34, 35, 46, 54, 7, 3, 5, 235, , true], 4));

tippy(btn, {
	content: 'Привет! Это первая кнопка!',
	placement: 'left-start',
	animation: 'scale',
	theme: 'light',
});

const swiper = new Swiper('.mySwiper', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},
});

const input = document.querySelector('.input1');

IMask(input, {
	mask: '+{7}(000)000-00-00',
});
