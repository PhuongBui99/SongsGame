

//Create questions
let questions = [
    {
        question: 'What is the name of this song?',
        src: 'song/boombayh.mp3',
        choiceA: 'DUDUDUDU',
        choiceB: 'KILL THIS LOVE',
        choiceC: 'BOOMBAYAH',
        choiceD: 'FOREVER YOUNG',
        correct: 'C'
    },
    {
        question: 'What is the name of singer?',
        src: 'song/realfriend.mp3',
        choiceA: 'Justin Bieber',
        choiceB: 'Camila Camello',
        choiceC: 'Martin Garrix',
        choiceD: 'Selena Gomez',
        correct: 'B'
    },
    {
        question: 'What is my fav song?',
        src: 'song/intention.mp3',
        choiceA: 'FML',
        choiceB: 'Supalonely',
        choiceC: 'Young and sad',
        choiceD: 'Intentions',
        correct: 'D'
    },
    {
        question: 'What is the name of this song?',
        src: 'song/dou.mp3',
        choiceA: 'FML',
        choiceB: 'Supalonely',
        choiceC: 'Do u even miss me at all?',
        choiceD: 'Intentions',
        correct: 'C'
    },
    {
        question: 'What film is the song written for?',
        src: 'song/letgo.mp3',
        choiceA: 'Spider man into spider verse',
        choiceB: 'Superman',
        choiceC: 'The Hulk',
        choiceD: 'Stranger things',
        correct: 'A'
    }
]

const lastQuestion = questions.length - 1;
let runningQuestion = -1;
let number = 0;
const song = new Audio();
const congratu = new Audio();
congratu.src = 'song/applause7.mp3';
//render question
function renderQuestion(){
    let q = questions[runningQuestion];
    var a = document.getElementById('question');
    a.innerHTML = q.question; 
    song.src = q.src;
    document.getElementById('number-question').innerHTML = number;
    document.getElementById('answer1').innerHTML = 'A: ' + q.choiceA;
    document.getElementById('answer2').innerHTML = 'B: ' + q.choiceB;
    document.getElementById('answer3').innerHTML = 'C: ' + q.choiceC;
    document.getElementById('answer4').innerHTML = 'D: ' + q.choiceD;

}


function next(){
    number++;
    runningQuestion++;
    renderQuestion();
    document.getElementById('kq').innerHTML = ``;
}

next();


let score = 0;
function checkAnswer(answer){
           if(answer == questions[runningQuestion].correct){
               score++;
               document.getElementById('score').innerHTML = score;
               song.pause();
               if(score == questions.length){
                document.getElementById('kq').innerHTML = `<img src="https://media3.giphy.com/media/dBf0OpOH96MTM6hYqr/200w.webp?cid=ecf05e474bb812b504ca31df96c1e87a5e0c58088fcf88cd&rid=200w.webp" ></img>`  
               }else{
                congratu.play();
                congra();
               }
           }
           else{
               sorry();
           }
}

function congra(){
   
    document.getElementById('kq').innerHTML = `<img src="https://media3.giphy.com/media/61UCedCMRrpMqCJrbg/200w.webp?cid=ecf05e4714a250763c5ed08473dd1f6d4b24b41f8f25b73b&rid=200w.webp" ></img>`  
}

function sorry(){
    document.getElementById('kq').innerHTML = `<img src= "https://media2.giphy.com/media/rvDtLCABDMaqY/200w.webp?cid=ecf05e4717d62787bf4422b6a9f0793a378d0bf1ce2afe20&rid=200w.webp" ></img>`
}

function pause(){
    song.pause();
}

function play(){
     song.play();
     document.getElementById('animation').classList.add('bar');
}

