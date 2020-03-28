/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,RoundScore,ActivePlayer,Dice,NoMove;

    StartNew();
//var lastDice;
document.querySelector('.btn-roll').addEventListener('click', function(){
if(NoMove){
    //1. display random no.
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;
    console.log(ActivePlayer,dice1,dice2);
   // console.log(ActivePlayer,dice,lastDice);

//2. display the result of dice and numerical result
//currently it is hidden and need to bring back to block later
document.getElementById('dice-1').style.display = 'block';
document.getElementById('dice-2').style.display = 'block';
document.getElementById('dice-1').src = 'dice-'+ dice1 +'.png';
document.getElementById('dice-2').src = 'dice-'+ dice2 +'.png';

if(dice1>1 && dice2>1){  //3. update the score if the rolled no was not a 1
    RoundScore += dice1+dice2;
    document.querySelector('#current-'+ ActivePlayer).textContent=RoundScore;
    }else{
        //next Player
        GamePlayer();
    }
// if(dice===6 && lastDice===6){
//     //player looses the score
//     document.getElementById('score-'+ActivePlayer).textContent='0';
//     GamePlayer();
// }
// else if(dice>1){  //3. update the score if the rolled no was not a 1
// RoundScore += dice;
// document.querySelector('#current-'+ ActivePlayer).textContent=RoundScore;
// }else{
//     //next Player
//     GamePlayer();
// }
// lastDice=dice;
}
}) 


document.querySelector('.btn-hold').addEventListener('click',function(){

    if(NoMove){
        scores[ActivePlayer] += RoundScore;
    document.querySelector('#score-'+ ActivePlayer).textContent=scores[ActivePlayer];
    var input=document.querySelector('.scorebox').value;
    var Defaultscore;
    if(input){
        Defaultscore=input;
    }
    else{
        Defaultscore=100;
    }
    if(scores[ActivePlayer] >= Defaultscore){
        console.log(scores[ActivePlayer],input);
        document.querySelector('#name-'+ActivePlayer).textContent='WINNER!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none'; //hide dice after winner is decided
        document.querySelector('.player-'+ActivePlayer+'-panel').classList.add('winner');  //effects to winner
        document.querySelector('.player-'+ActivePlayer+'-panel').classList.remove('active'); //removes active class
        NoMove=false;
    }else{
    //next player    
    GamePlayer();
}
    }
})

function GamePlayer(){
    ActivePlayer === 0 ? ActivePlayer=1 : ActivePlayer=0;
    RoundScore=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    
    document.querySelector('.player-0-panel').classList.toggle('active');//add || remove
    
    document.querySelector('.player-1-panel').classList.toggle('active');//add   || remove
}

document.querySelector('.btn-new').addEventListener('click',StartNew); //starts new game

function StartNew(){
    scores=[0,0];
    RoundScore=0;
    ActivePlayer=0;
    NoMove=true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Rithika';
    document.getElementById('name-1').textContent='Narasimha';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
