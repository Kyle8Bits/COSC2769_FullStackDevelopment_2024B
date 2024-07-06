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
  

async function getCatFact(){
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    displayCatFact(data.fact);
}

function displayCatFact(fact){
    const catFactContainer = document.getElementsByClassName('cat-fact')[0];
    catFactContainer.textContent = fact;
}

getCatFact();