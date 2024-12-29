
let computer_Guess;
let user_Guess = [];
let user_guess_update = document.getElementById("text_output");
let user_number_update = document.getElementById("input_box");
let audia = new Audio('buzzer-5-183896.mp3');


const init = () => {

    computer_Guess = Math.floor (Math.random() * 100);
    // console.log(computer_Guess);

    document.getElementById("game_area").style.display = "none";
    document.getElementById("new_game_button").style.display = "none";
    
    
    
    
};

const startGame = () => 
{
    
    document.getElementById("game_area").style.display = "block";
    document.getElementById("welcome_Screen").style.display = "none";
};



// start new game


const start_new_game = () =>
{
    document.getElementById("new_game_button").style.display = "inline";
    user_number_update.setAttribute("disabled" , true);
}

function newGame()
{
    window.location.reload();
    audia.play();

}







// main logic app
// 

const comguess = () =>
{
    const  user_Number = (document.getElementById("input_box").value);
    user_Guess = [...user_Guess, user_Number];
    document.getElementById("guesses").innerHTML = user_Guess;
    audia.play();

    // check the value low or high

if(user_Guess.length < max_Guess)
{if(user_Number > computer_Guess)

{
user_guess_update.innerHTML = "your guess is high 😋"
user_number_update.value = "";

}
else if(user_Number < computer_Guess)
{
user_guess_update.innerHTML = "your guess is low 😥"
user_number_update.value = "";
}
else{
user_guess_update.innerHTML = "Hurrah ! 😍"
user_number_update.value = "";
start_new_game();
}
}

else{
    if(user_Number > computer_Guess)

    {
    user_guess_update.innerHTML = `you loss correct umber is - ${computer_Guess}`
    user_number_update.value = "";
    start_new_game();
    
    }
    else if(user_Number < computer_Guess)
    {
    user_guess_update.innerHTML = `you loss correct umber is - ${computer_Guess}`
    user_number_update.value = "";
    start_new_game();
    }
    else{
    user_guess_update.innerHTML = "Hurrah ! 😍"
    user_number_update.value = "";
    start_new_game();
    }
}

    document.getElementById("attempts").innerHTML = user_Guess.length;

};







const easymode = () => 
{
    max_Guess = 10;
    startGame();
    audia.play();
}

const hardmode = () => 
{
    max_Guess = 5;
    startGame();
    audia.play();
}