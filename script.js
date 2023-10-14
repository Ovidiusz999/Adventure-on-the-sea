document.addEventListener("DOMContentLoaded", function() {
   const startBTN = document.getElementById("startBTN");
   const start = document.getElementById("start");
   const bodyStart = document.getElementById("bodyStart");
   const textStart = document.getElementById("textStart");
   const AIDiv = document.getElementById("AIDiv");
   const EnemyDiv = document.getElementById("EnemyDiv");
   const choiche = document.getElementById("choiche");
   const EnemyText = document.getElementById("EnemyText");
   const RPS = document.getElementById("RPS");

   let ghostText = document.getElementById("AIText");
   let userText = document.getElementById("choiceText");

   // All the text
   const text = [
      {
        ghost: [
          "Ahoy! I'm Captain Morgan!",
        ],
        user: "Hi!"
      },
      {
        ghost: [
          "The fate has brought us together, can you help me to find my treasure?"
        ],
        user: "Why would I help a ghost?!"
      },
      {
         ghost: [
           "Because you seems like a helpfull person. Can we go to the seas?"
         ],
         user: "Lets go!"
       },
       {
         ghost: [
           "This is my ship, we have to do three task before we can get my treasure."
         ],
         user: "Sure. What is it?"
       },
       {
         ghost: [
           "First we have to take down a pirate, her name is Lisa"
         ],
         user: "lets sail!"
       },
       {
         ghost: [
           "We have arrived!"
         ],
         user: "Nice."
       },
       {
         ghost: [
           "We have to beat him now!"
         ],
         user: "!Start!",
         enemy: "Lets fight! Rock, Paper, Scrissor!"
       },
       {
         ghost: [
           "Incredible"
         ],
         user: "Quess im just better.",
         enemy: "Ahhh! you....(she died)"
       },
       {
         ghost: [
           "Now we have the one key out of the third"
         ],
         user: "Nice!",
       },
       {
         ghost: [
           "We have to go forward"
         ],
         user: "Alright!",
       },
       {
         ghost: [
           "Here we are. Our enemy is close!"
         ],
         user: "...",
       },
       {
       ghost: [
         "We have to beat him now!"
       ],
       user: "!Start!",
       enemy: "Die!!!"
      }
    ];
    
   const firstB = new Image();
   firstB.src = "src/sea.jpg";

   const ship = new Image();
   ship.src = "src/ship.jpg";

   const island1 = new Image();
   island1.src = "src/island1.jpg";

   const island2 = new Image();
   island2.src = "src/island2.jpg";

   let x = 0;
   let y = 0;
   let i = 0;
   function startGame() {
      // Displays
      start.style.display = "none";
      textStart.style.display = "none";
      choiche.style.display = "flex";
      AIDiv.style.display = "flex";

      // Background
      bodyStart.style.backgroundImage = `url('${firstB.src}')`;
      bodyStart.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundPosition = "center";

      // Text
      ghostText.innerHTML = text[x].ghost;
      userText.innerHTML = text[y].user;
   }

   function Game() {
      x += 1;
      

      if (x < text.length) {
         ghostText.innerHTML = text[x].ghost[0];
         userText.innerHTML = text[x].user;
         EnemyText.innerHTML = text[x].enemy;
      }

      if (x === 3) {
         bodyStart.style.backgroundImage = `url('${ship.src}')`;
      } else if (x === 5) {
         bodyStart.style.backgroundImage = `url('${island1.src}')`;
      } else if (x===6) {
         EnemyDiv.style.display = "flex";
      }
      
      if (x===7) {
        EnemyDiv.style.display = "none"
        AIDiv.style.display = "none"
        choiche.style.display = "none"
        RPS.style.display = "block"
      }

      if(x===8){
         EnemyDiv.style.display = "none"
      }

      if(x===9){
         bodyStart.style.backgroundImage = `url('${island2.src}')`;
      }
      

      if(x===12){
         
      }
   }

   //variables

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scrissor = document.getElementById("scrissor");
let result = document.getElementById("result");
let userP = document.getElementById("user");
let computerP = document.getElementById("computer");
let user = '';
let computer = '';

// function

function game (){

   // random choiche

   let x = Math.floor(Math.random()*3);

   if (x >= 0 && x < 1){
      computer = "rock"
   } else if (x >= 1 && x < 2){
      computer = "paper"
   } else if (x >= 2 && x < 3){
      computer = "scrissor"
   }

   // computer chouche show

   if (computer === "rock"){
      computerP.innerHTML = "Lisa chosed rock"
   } else if (computer === "paper"){
      computerP.innerHTML = "Lisa chosed paper"
   } else {
      computerP.innerHTML = "Lisa chosed scrissor"
   }

   // game logic

   if (user === 'rock' && computer === 'paper') {
      result.innerHTML = "You have lost -_-";
   } else if (user === 'rock' && computer === 'scrissor') {
      result.innerHTML = "You have won >_<";
      i += 1;
   } else if (user === 'rock' && computer === 'rock') {
      result.innerHTML = "Its a draw O_O";


   } else if (user === 'paper' && computer === 'rock') {
      result.innerHTML = "You have won >_<";
      i += 1;
   } else if (user === 'paper' && computer === 'paper') {
   result.innerHTML = "Its a draw O_O";
   } else if (user === 'paper' && computer === 'scrissor') {
      result.innerHTML = "You have lost -_-";


   } else if (user === 'scrissor' && computer === 'rock') {
      result.innerHTML = "You have lost -_-";
   } else if (user === 'scrissor' && computer === 'paper') {
      result.innerHTML = "You have won >_<";
      i+= 1;
   } else if (user === 'scrissor' && computer === 'scrissor') {
      result.innerHTML = "Its a draw O_O";
   }

   if (i === 1){
      x+=1
      y+=1
      EnemyDiv.style.display = "block"
      AIDiv.style.display = "block"
      choiche.style.display = "block"
      RPS.style.display = "none"}
}

// onclick events

rock.addEventListener("click", function() {
   user = "rock";
   userP.innerHTML = "You have chosed rock"
   game()
});

paper.addEventListener("click", function() {
   user = "paper";
   userP.innerHTML = "You have chosed paper"
   game()
});

scrissor.addEventListener("click", function() {
   user = "scrissor";
   userP.innerHTML = "You have chosed scrissor"
   game()
});

   startBTN.addEventListener("click", startGame);
   choiche.addEventListener("click", Game);
});


