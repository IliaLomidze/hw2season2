// 1. მიიღეთ მომხმარებლების სია https://jsonplaceholder.typicode.com/users-დან
// და ამოიღეთ მხოლოდ მომხმარებლის სახელები მასივში.
// const dataRequest = async () => {
//    try {
//       await fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => {
//          data.forEach((item) => {
//             const app = document.getElementById('app')
//             const ul = document.createElement('ul')
//             const li = document.createElement('li')
   
//             li.innerText = item.name
//             ul.appendChild(li)
//             app.appendChild(ul)
//          });
//       })
//        } catch (error) {
//       console.log(error)
//    }
// }

// console.log(dataRequest())
// 2. შექმენით კლასი Car,რომელშიც აღწერილი იქნება:მოდელის, კომპანია,
// და წელი. შექმენით ამ კლასში ფუნქცია getCarDetails, რომელიც აბრუნებს
// მანქანის დეტალების შემაჯამებელ სტრიქონს.

// class car {
//     constructor(model,company,year){
//         this.model = model;
//         this.company = company;
//         this.year = year;
//     }
//     getCarDetails(){
//         return `this car is ${this.model}, Manufacturer is ${this.company} and release date is ${this.year}`
//     }
// }
// const newCar = new car('Lada', 'AvtoVAZ', '1973')

// console.log(newCar.getCarDetails())

// 3.ამ პოსტების API-დან https://jsonplaceholder.typicode.com/posts
// შექმენით კლასის პოსტი თვისებების ID,
// სათაური და ტექსტი. შექმენით Post ობიექტების მასივი მოტანილი მონაცემების საფუძველზე.

// class Post {
//     constructor(id, title, text) {
//         this.id = id;
//         this.title = title;
//         this.text = text;
//     }
// }

// async function fetchPosts() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }

//         const data = await response.json();
//         const posts = data.map(post => new Post(post.id, post.title, post.body));

//         return posts;
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchPosts().then(posts => {
//     console.log(posts);
// });


// 4. შექმენით ობიექტი,რომელიც შედგება სახელებისა და ასაკს მასივის გათვალისწინებით,
// გაფილტრეთ და დააბრუნეთ ახალი მასივი 18 წელზე უფროსი ასაკის პირების ობიექტებით,
// გამოიყენეთ filter მეთოდი!!
// შექმენით მასივი რომელშიც არის სახელები და ასაკები

// const people = [
//     { name: "Maka", age: 25 },
//     { name: "Ruslani", age: 16 },
//     { name: "Vakhtangi", age: 30 },
//     { name: "Kuku", age: 17 }
//   ];
  
//   const filteredPeople = people.filter(person => person.age > 18);
  
//   console.log(filteredPeople);
  

// 5.ამ Todo API-დან https://jsonplaceholder.typicode.com/todos,
// შექმენით კლასი Todo,რომელშიც აღწერილი მექნება: ID, title და completed. 
// შემდეგ გაფილტრეთ მხოლოდ დასრულებული სამუშაოები Todo ობიექტების მასივში.

// class Todo {
//     constructor(id, title, completed) {
//         this.id = id;
//         this.title = title;
//         this.completed = completed;
//     }
// }

// async function fetchTodos() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }

//         const data = await response.json();
//         const completedTodos = data
//             .filter(todo => todo.completed === true)
//             .map(todo => new Todo(todo.id, todo.title, todo.completed));

//         return completedTodos;
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchTodos().then(completedTodos => {
//     console.log(completedTodos);
// });

