//Quiz Array with objects
const quiz = [
    {
        question: "What planet is closest to the sun?",
        answers: ["Saturn", "Venus", "Mercury", "Earth"],
        correctAns: "Mercury"         
    },
    {
        question: "Which is the largest Mamal?",
        answers: ["Elephant", "Whale", "Camel", "Tiger"],
        correctAns: "Whale"         
    },
    {
        question: "Indian Parliament in New Delhi was designed by whom?",
        answers: ["Le Corbusier", "Edwin Landseer Lutyens", "Bonnano Pisano", "Gustave Eiffel"],
        correctAns: "Edwin Landseer Lutyens"         
    },
    {
        question: "Which was the latest state formed in India?",
        answers: ["Telangana", "Jammu and Kashmir", "Jharkhand", "Haryana"],
        correctAns: "Telangana"         
    },
    {
        question: "India won it's first gold in Hockey in which year?",
        answers: ["1927","1928","1930","1931"],
        correctAns: "1928"
    }
]


//fetching the elements from the UI.
const question = document.getElementById('question');
const row = document.getElementById('answers-col');
const nextBtn = document.getElementById('nextQuestion');


//intialize the temporary array for already displayed questions
let currentIndex = [];


//fetch the random question from the array 
const getRandomIndex = (arr) =>{
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex
}




const quizApp = () =>{

    //this if condition will check if the newly created blank arrays lenght is equal to the questions array. 
    if(currentIndex.length === quiz.length){
        alert('No more questions left');
        return
    }

        let randomEle; //created randomElement variable.
        do{
            randomEle = getRandomIndex(quiz); //uses randomIndex function to generate random index and store that in the randomEle variable
        }
        while(currentIndex.includes(randomEle)); // while the randomEle not in the temp array Current Index proceed further 

        currentIndex.push(randomEle); //push randomEle in the temporary array
        const currentQuestion = quiz[randomEle]; //From the quiz array get the object on randomIndex
        question.textContent = currentQuestion.question; 
        row.innerHTML = '';
        
        currentQuestion.answers.forEach((answer) => {
            const label = document.createElement("label");
            const ansBtn = document.createElement("button");
            ansBtn.setAttribute('class', 'ansbtn')
            ansBtn.textContent = answer;
            label.appendChild(ansBtn);
            row.appendChild(label);
    
            ansBtn.addEventListener('click', () => {
                if (answer === currentQuestion.correctAns) {
                    ansBtn.classList.add('correct')
                } else {
                    ansBtn.classList.add('incorrect')
                }
            })
        });
    }


nextBtn.addEventListener("click", quizApp);

quizApp();
