// P1
// const students = [
//     {id: 's123', name: 'Alice', GPA: 3.4},
//     {id: 's456', name: 'Bob', GPA: 2.8},
//     {id: 's789', name: 'Carol', GPA: 3.7}
//   ];
  
//   // 1. Use map() to return an array of names
//   const names = students.map(student => student.name);
//   console.log(names); // Output: ['Alice', 'Bob', 'Carol']
  
//   // 2. Use filter() to return an array of students whose GPAs >= 3.0
//   const highGPAStudents = students.filter(student => student.GPA >= 3.0);
//   console.log(highGPAStudents); 
//   // Output: [{id: 's123', name: 'Alice', GPA: 3.4}, {id: 's789', name: 'Carol', GPA: 3.7}]
  
//   // 3. Use reduce() to return the average GPA of all students
//   const averageGPA = students.reduce((acc, student, _, arr) => acc + student.GPA / arr.length, 0);
//   console.log(averageGPA); // Output: 3.3


// P2
// async function getCatFact(){
//     const response = await fetch('https://catfact.ninja/fact');
//     const data = await response.json();
//     displayCatFact(data.fact);
// }

// function displayCatFact(fact){
//     const catFactContainer = document.getElementsByClassName('cat-fact')[0];
//     catFactContainer.textContent = fact;
// }

// getCatFact();


// P3
function f1(){
    return new Promise(resolve =>{
            resolve(Math.random());
    })
}

function f2(){
    return new Promise(resolve =>{
            resolve(Math.random());
    })
}

console.log('Start time:', new Date());
f1().then(
  (n1) => {
    console.log(`First number: ${n1}`);
    
    f2().then(
      (n2) => {
        console.log(`Second number: ${n2}`);
        console.log(`Sum: ${n1 + n2}`);
        console.log('End time:', new Date());
      }
    )
  }
);

// async function calcSumFaster() {
//     const p1 = f1();  // p1 is a promise
//     const p2 = f2();  // p2 is also a promise
//     return Promise.all([p1, p2]);
//   }
  
//   console.log('Start time:', new Date());
//   calcSumFaster().then( (values) => {
//     console.log(`First number: ${values[0]}`);
//     console.log(`Second number: ${values[1]}`);
//     console.log(`Sum: ${values[0] + values[1]}`);
//     console.log('End time:', new Date());
//   });
  
  


