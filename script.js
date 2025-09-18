function play() {
    const heading = document.getElementById("heading");
    const input = document.getElementById("birthdayInput").value;

    if (!input) {
        heading.innerHTML = "Please enter a date!";
        return;
    }

    let birthDate = new Date(input);
    if (isNaN(birthDate) || birthDate <= -1) {
        heading.innerHTML = "Invalid date format!";
        return;
    }

    const today = new Date().getTime();

    const diffTime = birthDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        heading.innerHTML =  String.fromCodePoint(0x1F389) + " today is your birthday! " + String.fromCodePoint(0x1F389);
        return;
    }

    if (diffDays < 0) {
        heading.innerHTML = "Your birthday has already passed this year! " + String.fromCodePoint(0x1F382 , 0x231B , 0x1F605);
        return;
    }

    heading.innerHTML = `🎉 ${diffDays} day(s) left until your next birthday!`;

}
 