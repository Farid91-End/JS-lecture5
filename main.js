// let person = {
//     name: "Farid",
//     age: 26,
//     profession: "FrontEnd developer",
//     placeOfWork: "Orienbank",
    // adress:{
    //     country: "Tajikistan",
    //     city: "Dushanbe",
    //     street: "N.Qarabaev 13",
    // }
// }
// console.log(person);
// person.gender = "male",
// person.age = 19
// delete person.placeOfWork
// console.log(person.profession);
// console.log(person['name']);
// console.log(person['age']);
// person.name = "Safarov Farid"
// console.log(person.adress);
// console.log(person);
// console.log(Object.entries(person.adress));
// console.log(Object.values(person));   
// console.log(Object.entries(person));
// console.log(Object.keys(person));



// function getSum(obj){
//     let {num1,num2}=obj
//     return num1+num2
// }   console.log(getSum({num1:1, num2:5}));



//task1
// function getVoteCount(obj){
//     return obj.upvotes-obj.downvotes
// }   console.log(getVoteCount({upvotes:13, downvotes:2}));

//task2


// function maximumScore(){

// }



// function isEmptyObject(obj){
//      if(Object.keys(obj).length === 0){
//      return true
//     } else {
//         return false
//     }
// } console.log(isEmptyObject({a:1}));



// function addNew(obj,keyy,value){
//      obj.key=value
//      return obj
// }console.log(addNew({piano:500},"Brutus",400));


// function addNew(obj,key,value){
//     obj[key]=value
//     return obj  
// } console.log(addNew({piano:500},"Brutus",400));




// function maximumScore(obj){
//     let newScore ={... obj.score};
//     return newScore

// } console.log(maximumScore([{tile:"N", score:1},{tile:"K", score:5},
// {tile:"Z", score:10},{tile:"X", score:8},{tile:"D", score:2},{tile:"A", score:1},
// {tile:"E", score:1}]));

// function maximumScore(obj){
//     let summ=0
//      obj.map(el=>summ+=el.score)
//      return summ
// } console.log(maximumScore([{tile:"N", score:1},{tile:"K", score:5},
// {tile:"Z", score:10},{tile:"X", score:8},{tile:"D", score:2},{tile:"A", score:1},
// {tile:"E", score:1}]));