const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

var player_choice = ""
var player_points = 0

var NPC_choice = ""
var NPC_points = 0

var selection = 0






rock.addEventListener("click", e => {
    player_choice = "Rock"
    selection = Math.floor(Math.random() * 3)
    if (selection == 0) {
        NPC_choice = "Rock"
    }
    if (selection == 1) {
        NPC_choice = "Paper"
        NPC_points = NPC_points + 1
    }
    if (selection == 2) {
        NPC_choice = "Scissors"
        player_points = player_points + 1
    }
    if (NPC_points == 5 || player_points == 5) {
        document.getElementById("score").innerHTML = player_points+":"+NPC_points
        if (NPC_points == 5) {
            document.getElementById("message").innerHTML = "You lost" 
            NPC_points = 0
            player_points = 0
        }
        else {
            document.getElementById("message").innerHTML = "You won!" 
            NPC_points = 0
            player_points = 0
        }

    }
    else {

    document.getElementById("score").innerHTML = player_points+":"+NPC_points
    document.getElementById("message").innerHTML = "You chose "+player_choice+", they chose " + NPC_choice 
    }
}
    ) 


paper.addEventListener("click", e => {
    player_choice = "Paper"
    selection = Math.floor(Math.random() * 3)
    if (selection == 0) {
        NPC_choice = "Rock"
        player_points = player_points+1
    }
    if (selection == 1) {
        NPC_choice = "Paper"
    }
    if (selection == 2) {
        NPC_choice = "Scissors"
        NPC_points = NPC_points + 1
    }
    if (NPC_points == 5 || player_points == 5) {
        document.getElementById("score").innerHTML = player_points+":"+NPC_points
        if (NPC_points == 5) {
            document.getElementById("message").innerHTML = "You lost" 
            NPC_points = 0
            player_points = 0
        }
        else {
            document.getElementById("message").innerHTML = "You won!" 
            NPC_points = 0
            player_points = 0
        }

    }
    else {

    document.getElementById("score").innerHTML = player_points+":"+NPC_points
    document.getElementById("message").innerHTML = "You chose "+player_choice+", they chose " + NPC_choice 
    }
}
    ) 

scissors.addEventListener("click", e => {
    player_choice = "Scissors"
    selection = Math.floor(Math.random() * 3)
    if (selection == 0) {
        NPC_choice = "Rock"
        NPC_points = NPC_points + 1
    }
    if (selection == 1) {
        NPC_choice = "Paper"
        player_points = player_points + 1
    }
    if (selection == 2) {
        NPC_choice = "Scissors"
    }
    if (NPC_points == 5 || player_points == 5) {
        document.getElementById("score").innerHTML = player_points+":"+NPC_points
        if (NPC_points == 5) {
            document.getElementById("message").innerHTML = "You lost" 
            NPC_points = 0
            player_points = 0
        }
        else {
            document.getElementById("message").innerHTML = "You won!" 
            NPC_points = 0
            player_points = 0
        }

    }
    else {

    document.getElementById("score").innerHTML = player_points+":"+NPC_points
    document.getElementById("message").innerHTML = "You chose "+player_choice+", they chose " + NPC_choice 
    }
    
    }
        ) 