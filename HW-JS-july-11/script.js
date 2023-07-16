  // Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

  // let x = 0;
  // for(let i = 0; i < 10; i +=2 ) {
  //         console.log(i);
  //   }
 

  // Напишите цикл for, который выводит в консоль  все числа от 55 до 20
//  let x = 55;

//  for (let i = 55; i >= 20; i--) {
//      console.log(i);
//    }


  // Дан массив numbers. Вывести в консоль все числа из массива
  // const numbersArr = [3, 5, 11, 2, 8, 1, 6];

  //  for (let i = 0; i < numbersArr.length; i ++) {
  //  console.log(numbersArr[i]);
  //  }
  

  // Сформировать новый массив numbers_squared и 
  // передать в него все элементы из массива numbers, возведенные в квадрат

//  const numbers_squared = [];
//  for (let i = 0; i < numbers_squared.length; i++) {
//    numbers_squared.push(numbers[i] ** 2);
//  }
//   console.log("Array numbers_squared:");
//   console.log(numbers_squared);


  // Создать переменную last_elem и передать в нее последний элемент
  //  из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

  // const last_elemArr  = [numbers_squared];
  // const  numbers_squared1 = numbers_squared[numbers_squaredArr.length-1]
  // console.log(numbers_squared1);
  // _____________
  // Дан объект user. Используя данные из объекта, сформировать строку в формате:
  //  ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

  // const user = {
  // first_name: 'Ivan', 
  // last_name: 'Ivanov', 
  // age: 20, 
  // salary: 500
  // }

  const user = {  
   firstName: "Natalia", 
   lasttName: "Yankina",
   age:50, 
   salary: 500
  }
  const AboutMe  = `User's name is ${ user.firstName }, last name is  ${user.lasttName}.  She is ${user.age } years old. Salary is ${ user.salary } `; // console.log(`User's name is ${ firstName },   ${lastName}.  She is ${ age } years old, salary is ${ salary } `)
  console.log(AboutMe);


