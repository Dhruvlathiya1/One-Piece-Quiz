const questions = [{
    question: "Who sucks all of the poison out of Luffy's body?",
    Option: ["Hancock", "Nami", "Reiju", "Robin"],
    correctAnswer: "Reiju"
}, 
{
    question: "Who was the first marine Admiral to be shown in the series?",
    Option: ["Akainu", "Kizaru", "Aokiji", "Sengoku"],
    correctAnswer: "Aokiji"
},
{
    question: "Who gave Shanks the scar on his eye?",
    Option: ["Dragon", "Marshall D", "Akainu", "Himself"],
    correctAnswer: "Marshall D"
},
{
    question: "How many crewmates did Luffy say he wanted at the beginning of the series?",
    Option: ["9", "10", "3", "4"],
    correctAnswer: "10"
}, 
{
    question: "How did Luffy get the scar under his eye?",
    Option: ["Attacked by bandits", "Fight with animal", "Himself", "Fight with another villager"],
    correctAnswer: "Himself"
}, 
];

let currentques = 0;
let score = 0;
let playscreen = document.getElementById("game-con");
let endscreen = document.getElementById("end");
let ques = document.getElementById("question");
let opt1 = document.getElementById("option1");
let opt2 = document.getElementById("option2");
let opt3 = document.getElementById("option3");
let opt4 = document.getElementById("option4");
let next = document.getElementById("next");
let finals = document.getElementById("final");
let playagain = document.getElementById("playagain");

function load(index, callback) {

    
    ques.textContent = questions[index].question;
    opt1.textContent = questions[index].Option[0]; 
    opt2.textContent = questions[index].Option[1]; 
    opt3.textContent = questions[index].Option[2]; 
    opt4.textContent = questions[index].Option[3]; 
    clear();
    if (callback) {
        callback(index);
        
    }
}

function check(index) {
    const op = [opt1, opt2, opt3, opt4];


    op.forEach((option)=>{
        option.style.border="2px solid black"
    });

    op.forEach(op =>{
        op.addEventListener("click", function(){
            if (op.textContent === questions[index].correctAnswer) {
                op.style.border="5px solid green";
                score++;
                
            }else{
                op.style.border="5px solid red";
            }
        })
    })
    
}

function clear(option) {
    const op = [opt1, opt2, opt3, opt4];
    op.forEach(op=>{
        op.style.border="2px solid rgb(20, 20, 20);"
    });
    
}
   load(currentques, check(currentques)); 

   next.addEventListener("click", function(){
    currentques++;
    if (currentques < questions.length) {
        load(currentques, check(currentques)); 
        
    }else{
        playscreen.style.display = "none";
    endscreen.style.display = "block";
    finals.textContent = + score; 
    


    }


   });

   playagain.addEventListener("click", function(){

    currentques = 0;
    score = 0;
    playscreen.style.display = "block";
    endscreen.style.display = "none";
   
    load(currentques, check(currentques)); 
   });


