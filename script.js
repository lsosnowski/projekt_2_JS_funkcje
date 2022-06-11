// Funkcje i zdarzenia
// typy prtoste: string, number, undefined


// function showUser(username,age) {

//     console.log(`To jest ${username} i ma ${age} lat`);

// }

// showUser("Dawid", 12);


// NApisz trzyu funkcje
// dodawanie do siebie 3 liczb
// oblixczanie pola trójkątq
//dodaj dwie liczny i podziel przez 3


// const addNums = (a,b,c) => {
       
//     console.log(a + b + c);
// }

// addNums(1, 2, 3);



// const poleTr = (a,h) => {
       
//     console.log(0.5*a*h);
// }

// poleTr(1.5,2);




// const scoreText = document.getElementById("score");

// const addNums = (a,b) => {

//     console.log(a+b);
//     const result = a+b;
//     // wyciaganie wyniku na stronę
//     return result; 
// }

// scoreText.textContent = addNums(2,4);






//pobieramy z html dane

const title = document.getElementById("Title");
const btntitle = document.getElementById("SetTitle");

//tworzymy fujnkcje

const changeTitle = () => {
    title.textContent = "Witamy w Katowicach";
    return;

}



const changeTitle2 = () => {
    title.textContent = "Domyślny tytuł";
    return;

}

// wywołanie funkcji

    // changeTitle();

// lub wywołanie kliknieciem

btntitle.addEventListener("click",changeTitle);
btntitle.addEventListener("dblclick",changeTitle2);


//podpinamy input pod js

const userNameInput = document.getElementById("UsernameField");


const showInputContent = (event) => {
    title.textContent = event.target.value;
   
}

userNameInput.addEventListener("input", (e) => showInputContent(e));




