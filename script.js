
let h1 = document.getElementById(".heading") ;


function play (){

    let nextBirthday = new Date(prompt("what your birthday" + "date , month , year"));
    let rightNow = new Date();

let nextBirthdaymilisecond =  nextBirthday.getTime();
let currentdateMilisecond = rightNow.getTime();
let leftDays = ( nextBirthdaymilisecond - currentdateMilisecond) / (1000 * 60 * 60 * 24);

h1.innerHTML = "days will ago" + Math.floor(leftDays);
}






























