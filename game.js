

let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let level = 0;
let clicks = 0;
let started = false;

$("body").on("keydown", function(){
    if (!started){
        started = true;
        nextSequence(); 
    }});

$(".button").on("click", function(){
    let userChosenColour = this.id;
    userPattern.push(userChosenColour);    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    let gameLength = gamePattern.length;
    let userLength = userPattern.length;     
    console.log("gamePattern = " + gamePattern);
    if(userLength > level){
        failure();
        console.log("End User Pattern = " + userPattern);
        console.log("condition Too Many Clicks");
    } else {
        } if (clicks === (gameLength - 1) && userChosenColour === gamePattern[gameLength - 1]){
            setTimeout(playOldSequence, 1000);
            setTimeout(nextSequence, ((gameLength * 750) + 1750));        
            console.log(gamePattern);
            console.log("condition advance to level " + level);       
        } else if(userPattern[clicks] === gamePattern[clicks] && gameLength > 1){
            clicks++;
            console.log("condition continue pattern");
        } else {
            failure();
            console.log("condition wrong answer");
}})

function nextSequence(){
    if (started){
        let randomNumber = Math.floor(Math.random()*4);
        let randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);      
        playSound(randomChosenColour);
        animatePress(randomChosenColour);
        let newLevel = ++level;
        $("h1").html("Level " + newLevel); 
        userPattern = [];
        clicks = 0;
    } else{
        return;
    }}

function playSound(name){
    let buttonSound = new Audio("public/sounds/" + name + ".mp3");
    buttonSound.play();
}

function animatePress(currentColour){
    $("." + currentColour).addClass("pressed");
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed")
}, 100)}

function playOldSequence(){    
    for (let i = 0; i < gamePattern.length; i++){
    setTimeout(function(){    
        let oldSound = gamePattern[i];
        animatePress(oldSound);
        playSound(oldSound);
}, ((i * 750) + 750))}}

function failure(){
    started = false;
    let fail = new Audio("public/sounds/wrong.mp3");
    fail.play();
    $("h1").html("FAILURE - Press any key to start again!");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over")
    }, 100)
    gamePattern = [];
    userPattern = [];
    level = 0;
    clicks = 0;
}


