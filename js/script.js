let petNum = 0;
function petDog() {
    randNum = Math.floor(Math.random()*100);
    petNum++;
    let element = document.getElementById('petCounter');
    petNum === 1 ? element.innerHTML = "Dog has been pet 1 time!" : element.innerHTML = `Dog has been pet ${petNum} times!`;
    if (randNum < 3) {
        alert('Woof!');
    }

    else if (randNum < 6) {
        alert('Bark!');
    }

    else if (randNum < 9) {
        alert("*pants*");
    }

}
