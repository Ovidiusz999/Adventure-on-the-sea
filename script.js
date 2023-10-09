document.addEventListener("DOMContentLoaded", function() {
   const startBTN = document.getElementById("startBTN");
   const start = document.getElementById("start");
   const bodyStart = document.getElementById("bodyStart");
   const textStart = document.getElementById("textStart");
   const AIDiv = document.getElementById("AIDiv");
   const EnemyDiv = document.getElementById("EnemyDiv");
   const choiche = document.getElementById("choiche");
   const EnemyText = document.getElementById("EnemyText");

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
       }
    ];
    
   const firstB = new Image();
   firstB.src = "src/sea.jpg";

   const ship = new Image();
   ship.src = "src/ship.jpg";

   const island1 = new Image();
   island1.src = "src/island1.jpg";

   let x = 0;
   let y = 0;

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
      y += 1;

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

   }

   startBTN.addEventListener("click", startGame);
   choiche.addEventListener("click", Game);
});


