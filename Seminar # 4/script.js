// localStorage

// localStorage.setItem('name', 'Bob');
// localStorage.setItem('age', '30');
// localStorage.setItem('gender', 'male');
// localStorage.setItem('nickName', 'Cool Boy');

// localStorage.removeItem('age');

// const user = localStorage.getItem('name');
// console.log(user);

// console.log(localStorage.key(1));
// localStorage.clear();

// // localStorage.user = { name: 'John' };

// localStorage.user = JSON.stringify({ name: 'John' });

// const newUser = JSON.parse(localStorage.user);
// console.log(newUser);

// import add from './modules/add.js';
// import { def, data } from './modules/def.js';
// import calc from './modules/funcs.js';

// console.log(add(10, 20));
// console.log(def(10, 5));
// console.log(data);
// console.log(calc.mult(5, 5));

// Асинхронщина

// const myPromise = new Promise((resolve, reject) => {});

// console.log(myPromise);

// myPromise
// 	.then((value) => {
// 		// value - значение, переданное методом resolve
// 	})
// 	.catch((error) => {
// 		// действия для обработки ошибки
// 	});

// const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => console.error('Что-то пошло не так'));

// Упрощение

// const getData = (url) =>
// 	new Promise((resolve, reject) => {
// 		fetch(url)
// 			.then((response) => response.json())
// 			.then((data) => resolve(data))
// 			.catch((error) => reject(error));
// 	});

// getData(url)
// 	.then((data) => console.log(data))
// 	.catch((error) => console.error('Что-то пошло не так'));

// async await

// const getData2 = async (url) => {
// 	const res = await fetch(url);
// 	const data = await res.json();
// 	return data;
// };

// try {
// 	const users = await getData2('https://jsonplaceholder.typicode.com/users');
// 	console.log(users);
// } catch (error) {
// 	console.error('Что-то пошло не так!');
// }

// Axios

// Проект NASA - Работа с API

const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=VG7hcoFMcSvGDhlJh3ylikHVk7Q8Q4Op8ZFDomGN&count=10';

const div = document.querySelector('.wrapper');

const getData3 = async (url) => {
	const res = await fetch(url);
	const data = await res.json();
	return data;
};

try {
	const data = await getData3(nasaURL);
	data.forEach((element) => {
		div.insertAdjacentHTML(
			'beforeend',
			`
				<figure>
 					<img src="${element.url}" alt="pic" />
  				<figcaption>${element.explanation}</figcaption>
					<button>Удалить</button>
				</figure>

		`
		);
	});

	const btns = document.querySelectorAll('button');
	console.log(btns);
	btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			console.log('Клик');
		});
	});
} catch (error) {
	console.error('Что-то пошло не так!');
}
