//object literal {}
let petSalon = {
    //arrributes
    name: "The Fashion Pet",
    phone: "000-000-0000",
    address: {
        country: "US",
        city: "Carlsbad",
        street: "Tamarack",
        number: "111",
        zip: "92008"

    },
     hours:{
        open:"9:00am",
        close:"5:00pm"
     },
    pets:[
        {
            name:"Loki",
            age: "3",
            gender:"male",
            breed: "American Bobtail",
            service: "fleas treatment",
            ownerName: "David",
            contactPhone: "789-098-777",


        },
        {
            name:"Rigby",
            age: "3",
            gender:"male",
            breed: "siamese",
            service: "clean teeth",
            ownerName: "David",
            contactPhone:"888-222-3333",

        },
        {
            name:"Arlo",
            age: "6",
            gender:"male",
            breed: "Maine Coon",
            service: "vaccination",
            ownerName:"DAvid",
            contactPhone:"322-556-7534",

        },
        {
            name:"Nala Sky",
            age: "4",
            gender:"female",
            breed:  ",
            service: "deep shampoo treatment",
            ownerName: "Sissa",
            contactPhone:"444-444-4444",
    ]
}

 function displayInfo(){
    document.getElementById("footer-info").innerHTML = `<p>Welcome to the fashion pet! Our address is ${petSalon.address.street} ${petSalon.address.number}, Zip code: ${petSalon.address.zip}</p>
    <p>${petSalon.address.city}, ${petSalon.address.state}</p>`;

 }
 function displayPetNames(){
    for(let i=0;i<petSalon.pets.length;i++){
        console.log(petSalon.pets[i].name);
    }
 }

 let x=0;

 function Pet(name, age, gender, breed, services, ownerName, contactPhone){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
    this.ownerName = ownerName;
    this.contactPhone = contactPhone;
    this.id=x++;
 }

// for(let i=0; i<students.length; i++){
//     console.log(students[i].age);
// }
// console.log("We have " + students.length + " students");


// console.log(petSalon.name);
// console.log(petSalon.phone);

// let students = [
//     {
//         name:"Myles",
//         age:98,
//         grade:"A"
//     },
//      {
//         name:"Tuong",
//         age:99,
//         grade:"A-"
//      },
//       {
//         name:"Miguel",
//         age:97,
//         grade:"F"
//       }
//     ]; // this is an array of students

// //FOR LOOP: start point; stopping condition ; increment
// //length return the number of elements
// for(let i=0; i<students.length; i++){
//     console.log(students[i].age);
// }
// console.log("We have " + students.length + " students");

// //brute force solution
// // console.log(students[0]);
// // console.log(students[1]);
// // console.log(students[2]);
// // console.log(students[3]);