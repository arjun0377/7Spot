
// const users = [
//   { name: "Aman", city: "Delhi" },
//   { name: "Priya", city: "Mumbai" },
//   { name: "Rahul", city: "Delhi" },
//   { name: "Sneha", city: "Kolkata" }
// ];

// const { useLayoutEffect } = require("react");

// const countcity = {};
// for (const user of users) {

//   let city = user.city;

//   countcity[city] = (countcity[city] || 0) + 1;

// }

// for (const city in countcity) {
//   if (countcity[city] > 1) {
//     console.log(`${city} apperas  ${countcity[city]}  times`)
//   }

// }

// const customer = {
//   name: "Ravi",
//   contact: {
//     email: "ravi@example.com",
//     phone: "9876543210"
//   },
//   address: {
//     city: "Pune",
//     zip: "411001"
//   }
// };

// for (const key in customer) {
//     const value  = customer[key];

//     if( typeof value === "object")
//       for (const nestedkey in value) {

//       console.log(`${nestedkey} : ${value[nestedkey]}`);

//       }else{
//         console.log(`${key} : ${value}`);
//       }
// }



// const userss = [
//   {
//     name: "Arjun",
//     activity: {
//       YouTube: 120,
//       Instagram: 90,
//       WhatsApp: 60
//     }
//   },
//   {
//     name: "Sneha",
//     activity: {
//       YouTube: 45,
//       Instagram: 80,
//       WhatsApp: 100
//     }
//   },
//   {
//     name: "Ravi",
//     activity: {
//       YouTube: 150,
//       Instagram: 60,
//       WhatsApp: 70
//     }
//   }
// ];


// for (const user of userss) {
//   console.log(`user: ${user.name}`)

//   let max =0;
//   let  maxttime = " ";


//   for (const platfarm in user.activity) {  
//     // console.log(`${platfarm} : ${user.activity[platfarm]} mins`)
//     const time = user.activity[platfarm];
//     if(max < time){
//       max = time;
//       maxttime = platfarm;
//     }

//   }
//   for (const platfarm in user.activity) {
//     const time = user.activity[platfarm];
//     if(platfarm === maxttime){
//       console.log(`the most use app is ${maxttime} :${time}`)
//     }




//     }    



//    console.log();
// }
// const cart = [
//   { name: "Laptop", price: 50000, quantity: 1 },
//   { name: "Mouse", price: 500, quantity: 2 },
//   { name: "Keyboard", price: 1000, quantity: 1 },
//   { name: "USB Cable", price: 200, quantity: 3 }
// ];

//  let subTotal = 0;

// for (const product of cart) {
//     let price = product.price;
//     let productname = product.name;
//      console.log(`${productname} :${price}`)
//      let Total = price*product.quantity;
//      subTotal += Total;
//     }
//     console.log(`Price : Rs.${subTotal}`);

//     let discount = 0;
//     if(subTotal > 10000){
//        discount = subTotal*0.10;
//       console.log(`Total Price After Discout: Rs.${subTotal-discount}`)
//     }else{
//       console.log("No discout applied !!")
//     }

// const grades = {
//   Math: 88,
//   English: 76,
//   History: 90,
//   Science: 82
// };

// for (const key in grades) {
//   let marks = grades[key];
//      console.log(`Subject:${key} Grade :${marks} `)
// }


// const userProfile = {
//   name: "Arjun",
//   age: 25,
//   email: "arjun@example.com",
//   isPremiumUser: true
// };

// for (const key in userProfile) {
//     if(key  === "email"){
//       continue;
//     }

//       const user  = userProfile[key]
//       console.log(`${key} :${user}`);

// }

// const inventory = {
//   Laptop: 5,
//   Mouse: 15,
//   Keyboard: 10,
//   Monitor: 3
// };
// let lowstoke = 0;
// for (const product in inventory) {

//   const stoke= inventory[product];
//   console.log(`${product} : ${stoke} in stoke`);

//   if(stoke < 5){
//     console.log( `Item is low in stoke by :${5-stoke}`)
//     lowstoke++;
//   }
// }

// const grades = {
//   Math: 85,
//   English: 72,
//   Science: 91,
//   History: 60,
//   Art: 40
// };

// for (const marks in grades) {
//      const result = grades[marks];
//     //  console.log(result)

//      if(result >= 75){
//       console.log(`${marks} - Grades - ${result} : Passed by Distinction `)
//      }else if(result >= 50 && result < 75){
//       console.log(`${marks} - Grades - ${result} : Passed`);

//      }else if(result < 50){
//       console.log(`${marks} - Grades - ${result} ; Failed`);
//      }else{
//       console.log("something went worong ")
//      }
// }

// const inventory = {
//   Laptops: 7,
//   Keyboards: 3,
//   Mice: 2,
//   Monitors: 4,
//   USB_Cables: 10
// };
// let lowstock =0;
// let totalstock =0;
// for (const product in inventory ) {
//   const stoke = inventory[product];

//   if(stoke < 5){
//     console.log(`⚠️ ${product} is low in stock by ${5-stoke}. Restock at least 5 more!`);
//     lowstock++;
//   }
//       totalstock += stoke;
//     }
//     console.log(`Total stocks in inventry are ${totalstock}`);
//   const students = [
//   {
//     name: "Arjun",
//     marks: {
//       Math: 85,
//       Science: 72,
//       English: 90
//     }
//   },
//   {
//     name: "Sneha",
//     marks: {
//       Math: 45,
//       Science: 55,
//       English: 60
//     }
//   },
//   {
//     name: "Ravi",
//     marks: {
//       Math: 30,
//       Science: 40,
//       English: 35
//     }
//   }
// ];



// for (const student  of students) {
//   const sname  = student.name;
//   console.log(`student Name : ${sname}`);
//   let  Total =0;
//   let subcount = 0;
//   let allpass = true;

//   for (const Subject in student.marks ) {
//     const marks = student.marks[Subject];
//     subcount++;
//     Total += marks;

//     if(marks > 50){
//       console.log(` ${Subject}: ${marks} ✅ Passed `)
//     }else{
//       console.log(` ${Subject} : ${marks} ❌ Failed `)
//       allpass = false;
//     }
//   }
//     const avg = Total/subcount;
//     const percenatge = (Total/(subcount*100))*100;

//     console.log("Total marks :", Total) 
//     console.log(`avg marks : ${avg.toFixed(2)}`);
//     console.log(`Percentage : ${percenatge.toFixed(2)}% `)
//     console.log(`Result :  ${allpass ?  "✅ Pass" : " ❌ Failed "  }`)
// }

// For each order, print:

// Customer name

// List each item with total price per item (price * quantity)

// Calculate and print the total price for the whole order

// If the total price is greater than ₹50,000, print:
// "You qualify for a premium discount!"


//     const orders = [
//   {
//     orderId: 101,
//     customer: "Arjun",
//     items: [
//       { product: "Laptop", price: 50000, quantity: 1 },
//       { product: "Mouse", price: 500, quantity: 2 }
//     ]
//   },
//   {
//     orderId: 102,
//     customer: "Sneha",
//     items: [
//       { product: "Keyboard", price: 1500, quantity: 1 },
//       { product: "USB Cable", price: 200, quantity: 3 },
//       { product: "Mouse", price: 500, quantity: 1 }
//     ]
//   }
// ];


// for (const customer of orders) {
//       let costumern = customer.customer;
//       let id = customer.orderId;
//       console.log("Order Id : " ,id)
//       console.log("Name :", costumern)


//       let total = 0;
//       for (const item in customer.items) {
//         let items = customer.items[item];
//         let itemstotal  = items.price*items.quantity;
//         console.log(`${items.product} X ${items.quantity} : ${itemstotal}`);
//         total += itemstotal

//       }
//       console.log(total);
//       let discount = total*0.10;
//       let fnalprice = total-discount;

//       if(total > 50000){
//         console.log(`Congratulation you get a premium dicount : INR ${discount}`)
//          console.log(`After Dicount Totlal : INR  ${fnalprice}`)
//       }
//       else{
//         console.log(`Total Price : INR ${total}`)
//       }

// }

// const libraryRecords = [
//   {
//     student: "Arjun",
//     books: {
//       "Atomic Habits": 12,
//       "Rich Dad Poor Dad": 8
//     }
//   },
//   {
//     student: "Sneha",
//     books: {
//       "Ikigai": 5,
//       "Deep Work": 15,
//       "The Alchemist": 7
//     }
//   },
//   {
//     student: "Ravi",
//     books: {
//       "1984": 11
//     }
//   }
// ];
// for (const student of libraryRecords) {
//   let studentn = student.student;
//   console.log("Name of the student :\n", studentn);

//   let totaltime = 0;
//   let totalbook = 0;

//   for (const book in  student.books){
//       let days  = student.books[book];
//       console.log(`Name of the Book: ${book} \n Borrowed for :${days} days  `);
//     totaltime += days;
//     if(days>10){
//       console.log( "⚠️ Overdue!")
//     }

//         if(typeof book  === "string"){
//           totalbook++;
//         }

//   } 
//   console.log("No of books:" ,totalbook)
// console.log("Total days :",totaltime)

// }




// Prints each student's name.

// Prints all books borrowed with number of days.

// Shows a warning for books borrowed more than 10 days.

// Calculates fine for overdue books (₹5 per extra day).

// Shows:

// Total number of books borrowed.

// Total fine to be paid. 

// const libraryRecords = [
//   {
//     student: "Arjun",
//     books: {
//       "JavaScript Basics": 12,
//       "Python for Data Science": 7,
//       "C++ Fundamentals": 15
//     }
//   },
//   {
//     student: "Riya",
//     books: {
//       "HTML & CSS": 5,
//       "React Guide": 11,
//       "Node.js Handbook": 9
//     }
//   }
// ];


// for (const studentN of libraryRecords) {
//   let studentName = studentN.student
//   console.log(`Sudent Name : ${studentName}`);

//   let totalbook =0;
//    let totalfine =0;
//   for (const book in studentN.books) {
//     let days = studentN.books[book]
//     console.log(`Name of the Book : ${book} \n Borrowed for : ${days} `);
//     totalbook++;

//     if (days > 10) {
//        let fine  = (days-10)*5;
//        totalfine += fine
//        console.log(`Warning Overdue : ${fine} fine `)
//       } else{
//         console.log("")
//       }
//   }
//   console.log(`Total Books :${totalbook} `)
//   console.log(`Overdue CHarges : Rs ${totalfine}`)
//   console.log("-----------------------------------")


// }

// Print each student's name.

// For each book:

// Show days borrowed.

// If borrowed more than 10 days → fine of Rs.5 per day (after 10th day).

// Show total number of books, total fine, and average overdue days.

// Print student grades.

// Show total marks, average, percentage.

// Show Pass / Fail result (if all marks > 50).

// Add a line to separate each student’s report.



// const libraryRecords = [
//   {
//     student: "Arjun",
//     books: {
//       "Data Structures": 14,
//       "JavaScript Basics": 9,
//       "Python": 12
//     },
//     grades: {
//       Math: 78,
//       Science: 68,
//       English: 55
//     }
//   },
//   {
//     student: "Riya",
//     books: {
//       "HTML & CSS": 6,
//       "Algorithms": 15
//     },
//     grades: {
//       Math: 45,
//       Science: 50,
//       English: 65
//     }
//   }
// ];


// for (const student of libraryRecords) {
//     let studentN = student.student;
//     console.log(`Student Name : ${studentN}`)

//     let totalbook =0;
//     let  totalfine =0;
//     let avgoverdue =0;
//     let totaloverduedays=0;

    

//     for (const book in student.books) {
//         let days = student.books[book]
//         console.log(`Book : ${book} - Borrowed for : ${days}`)
//         totalbook++;
//         if(days>10){
//           let fine = (days-10)*5;
//           console.log(`⚠️ Overdue : ${days-10} days | Fine : ${fine}`)
//           totalfine += fine;
//           totaloverduedays += days-10;
//         }
//         avgoverdue = totaloverduedays/totalbook; 
      
//       }
//     console.log(`Totalbook : ${totalbook}`)
//     console.log(`TotalFIne : ${totalfine}`)
//     console.log(`Avg OVerdue  : ${avgoverdue}`);
  
//      let toalsubject=0;
//      let totalmarks =0; 
//      let  avg =0;
//      let percenatge =0;

//     for (const grades in student.grades) {
//        let marks = student.grades[grades];
//        console.log(`${grades} - ${marks}`);
//       toalsubject++;

//         totalmarks += marks ;
//        avg= totalmarks/ toalsubject;;
//        percenatge =(totalmarks/toalsubject*100)/100;
      
   
//     }
//   console.log(`Total Marks : ${totalmarks}`)
//   console.log(`avg : ${avg}`)
//   console.log(` Percentage : ${percenatge} % `)
//   console.log("-----------------------------------")
  
// }

// const users = ["Arjun", "Maya", "Rahul"];

// users.forEach((user , index) => {
//   console.log(` ${index +1 }. ${ user}`)
// });

// const numbers = [2, 4, 6, 8];
// // Output: [4, 16, 36, 64]
//  let square = numbers.map(sq=> sq * sq)

//  console.log(square)


// const students = [
//   { name: "Arjun", marks: 92 },
//   { name: "Maya", marks: 45 },
//   { name: "Rahul", marks: 75 },
//   { name: "Neha", marks: 60 },
//   { name: "Priya", marks: 80 },
//   { name: "Ravi", marks: 35 },
//   { name: "Sneha", marks: 82 } 
// ];

// for(const student of students){
//   // let names = student.name;
//   let marks  = student.marks;
//   // console.log(names)
//   if(marks < 50){
//     console.log(` ${student.name}   ❌ Fail `)
//   }
//   else{
//     console.log(` ${student.name} ✅ Pass `)
//   }
// }
// let student = students.filter(student => student.marks > 50 ).map(student => student.name);
// console.log( `${student}✅  \n `)
// let studentsd = students.filter(student => student.marks < 50 ).map(student => student.name);
// console.log( `${studentsd}    ❌ \n `)

//  let names = students.filter(student => student.marks >= 75)
// console.log(names)


// let stavg = students.reduce((sum , s ) => sum +  s.marks  , 0   )
// let avg = stavg / students.length;
// console.log(` the avg is ${avg.toFixed(2)}`);

// let topper = students.reduce((max , s ) => s.marks > max.marks ? s : max )
// console.log(`${topper.name}\n${topper.marks}`);


const input = document.querySelector("#todo");
const add = document.querySelector("#add");
const list  = document.querySelector("#list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let markedTasks = JSON.parse(localStorage.getItem("markedTasks")) || [];
displaytask();

// event listner to the add button
add.addEventListener("click" , ()=>{
  let task = input.value.trim();
  if(task === "") return;
 

  tasks.push(task)
  markedTasks.push(false);
  localStorage.setItem("tasks" , JSON.stringify(tasks));
  displaytask();
  input.value = "";

});
// button clear all 
   const clearall = document.createElement("button");
        clearall.textContent = "Clear all ";
        clearall.style.marginLeft = "10px";
        
        const box = document.querySelector(".box")
        box.appendChild(clearall)
        
        clearall.addEventListener("click" ,  ()=>{
          // tasks.splice(index , [])
          tasks = [];
          
          localStorage.removeItem("tasks")
  
          displaytask();
        })
 
        const  theme  = document.querySelector("#theme");
        theme.addEventListener("click" , ()=>{
         const boxx = document.querySelector(".box")

       boxx.classList.toggle("dark")

       if(boxx.classList.contains("dark")){
        localStorage.setItem("theme", "dark")
       }else{
        localStorage.setItem("theme" , "light")
       }
       });
       if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark")
       }
 const search = document.querySelector("#search");
  
 search.addEventListener("input" , ()=>{
  let currentin = search.value.toLowerCase();
  const alltask  = document.querySelectorAll("#list li ")
  

  alltask.forEach(task=>{
    const tasktext = task.firstChild.textContent.toLowerCase();
   
    if(tasktext.includes(currentin)){
      task.style.display = "list-item"
    }else{
      task.style.display = "none";
    }
  })

 })
     const proritties =  ["high" , "medium" , "Low"];
    const select =  document.querySelector("#priority");
    
    proritties.forEach(proriti =>{
      const option = document.createElement("option");
     option.value = proriti.toLowerCase();

    option.textContent = proriti;
  select.appendChild(option) 

    })


function displaytask(){
  list.innerHTML = "";
  tasks.forEach((task , index) => {
     
     // acreatign the list 
    let liss = document.createElement("li");
    liss.textContent = task;
    
    //create delte btn 
    const dlbtn = document.createElement("button");
    dlbtn.textContent = "❌";
    dlbtn.style.marginLeft = "10px"
    
   //creatign tthe chekc buttokb 
    const check = document.createElement("input");
    check.type = "checkbox";
    check.style.marginLeft = "10px";
    liss.appendChild(check);
    
     check.checked = markedTasks[index];
     if(check.checked){
      liss.style.textdecoration = "line-through"
     }
    check.addEventListener("change" , ()=>{
      markedTasks[index] = check.checked;
      localStorage.setItem("markedTasks" , JSON.stringify(markedTasks));
    })
   
    liss.style.textdecoration = check.checked ? "line-through" :  "none" ; 

    //creategin edit button 
          const edit =  document.createElement("button");
          edit.textContent = "✏️"
          check.style.marginLeft = "10px";
          liss.appendChild(edit);
      
          edit.addEventListener("click" , () =>{
            const  edittask = document.createElement("input")

            edittask.type = "text"
            edittask.value = task;
            edittask.style.marginLeft = "10px";
              

            const savebtn = document.createElement("button");
            savebtn.style.marginLeft = "10px"
            savebtn.textContent ="Save";

            liss.innerHTML = "";
            liss.appendChild(edittask);
            liss.appendChild(savebtn);

            savebtn.addEventListener("click" , ()=>{
              const updatetask = edittask.value.trim();
              if(updatetask !== ""){
               tasks[index] = updatetask;

               localStorage.setItem("tasks", JSON.stringify(tasks));
               displaytask();
              }else{
                alert('task cannot be empty ')
              }
            })
          });
    
      
    // prioratize the tasks 


 

   

    //add eventliustner oit ht edelte btn 
    dlbtn.addEventListener("click" ,()=>{
      if(confirm("You Wnat to delte the taks ?  Really "))
        tasks.splice(index , 1 );
      localStorage.setItem("tasks" , JSON.stringify(tasks));
      displaytask();
    });

    

    liss.appendChild(dlbtn);
    list.appendChild(liss);
  });
  
  
  
  // input.value ="";
  
  
  
}