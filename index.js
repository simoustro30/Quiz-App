/*Question Array*/
QUESTIONS = [
 {
    question: 'What kind of farm does Dwight Schrute have?',
    answers: [  'Bananas',
                'Beets',
                'Tomatoes',
                'Onions',
                ],
    correct: 'Beets'
 },

 {
    question: "Where does 'The Office' take place?",
    answers: [  'Pittsburgh',
                'Boston',
                'New York',
                'Scranton',
                ],
    correct: 'Scranton'
 },

 {
    question: 'What school did Andy Bernard go to?',
    answers: [  'Yale University',
                'Harvard University',
                'Cornell University',
                'Columbia University',
                ],
    correct: 'Cornell University'
 },

 {
    question: 'Who is most commonly known as the head of the party planning committee (PPC)?',
    answers: [  'Michael',
                'Angela',
                'Pam',
                'Phyllis',
                ],
    correct: 'Angela'
 },

 {
    question: 'Where did Jim Propose to Pam?',
    answers: [  "Chili's",
                'At the office',
                'At a gas station',
                'Niagara Falls',
                ],
    correct: 'At a gas station'
 },

 {
    question: "What is Pam's favorite flavor of yogurt?",
    answers: [  'Mixed-berries',
                'Vanilla',
                'Chocolate',
                'Coconut',
                ],
    correct: 'Mixed-berries'
 },

 {
    question: "What does Kevin keep stashed at his desk?",
    answers: [  'Chicken fingers',
                'Tacos',
                'M&Ms',
                'Turtles',
                ],
    correct: 'M&Ms'
 },

 {
    question: "What does Michael's coffee mug say?",
    answers: [  'Another day another dollar',
                'Worlds best boss',
                'That is right',
                'Dunder Mifflin Inc',
                ],
    correct: 'Worlds best boss'
 },

 {
    question: "Who is Michael's greatest enemy?",
    answers: [  'Andy Bernard',
                'Creed Bratton',
                'David Wallace',
                'Toby Flenderson',
                ],
    correct: 'Toby Flenderson'
 },

 {
    question: 'Where did Angela and Dwight get married?',
    answers: [  'Schrute farm',
                'the office',
                'New York City',
                "Angela's house",
                ],
    correct: 'Schrute farm'
 },
];

/*Quiz functions*/
function startQuiz(){
   $('.js-startButton').click( function(event){
      event.preventDefault();
      questionRender();
   });
};

let currentQuestion = 0;
let score = 0;
let questionNumber = 1;

/*QUIZ DISPLAY PAGES*/

function questionOptions(){
   let question = QUESTIONS[currentQuestion];
   for(let i = 0; i < question.answers.length; i++){
      $('.js-answers').append(`
         <input type = 'radio' name='answers' id='answers${i+1}' value='${question.answers[i]}' tabindex= '${i+1}'>
         <label for='answers${i+1}'> ${question.answers[i]}</label></br> 
      `);
   };
};

function updateScore(){
   score++;
};

function updateQuestion(){
   currentQuestion++;
   questionNumber++;
};


function questionRender(){
   $('.questionNumber').text("Question: " + questionNumber +"/10");
   $('.correctAnswers').text("Score: " + score + "/10");
   let question = QUESTIONS[currentQuestion];
    $('main').html(`
    <div class="flex-box">
         <section class="questionBox box">
                    <div class="middleTitle">
                        <h2>
                            Question: ${question.question}
                        </h2>
                    </div>
                  <form>  
                    <div>
                     <div class= 'answers'> 
                        <div class="js-answers"></div>
                     <div>
                    <div class="button-container">   
                            <button type="submit" value='submit' class="submitButton">
                                submit
                            </button>
                    </div>
                  </form>
         </section>
      </div>
    `);
    questionOptions();
}


function rightAnswer(){
   $('main').html(`
   <div class= "flex-box response-box">
   <section class="middleBox box">
                <div class="middleTitle">
                    <h2>
                    Correct! 
                    </h2>
                </div>
                
                <div class="middle-picture">
                    <img src="./images/correct-answer.jpg">
                </div>

                <div class="button-container">   
                        <button type="button" class="nextButton">
                            NEXT
                        </button>
                </div>  
            </section>
   </div>
   `);
};

function wrongAnswer(){
   $('main').html(`
<div class= "flex-box response-box">
   <section class="middleBox box">
                <div class="middleTitle">
                    <h2>
                    Wrong... 
                    </h2>
                </div>
                
                <div class="middle-picture">
                    <img src="./images/wrong-answer.png">
                </div>
               <div
                  <p class= "corrected">The correct answer is ${QUESTIONS[currentQuestion].correct}</p>
               </div>
                <div class="button-container">   
                        <button type="button" class="nextButton">
                            NEXT
                        </button>
                </div>  
            </section>
</div>
   `);
}

function displayResults(){
   $('.correctAnswers').text("Score: " + score + "/10");
   if(score === QUESTIONS.length){
   $('main').html(`
   <div class="flex-box final-slide">
            <section class="middleBox box perfectScore">
                <div class="middleTitle">
                    <h2>
                    Wow YOU are a true fan! 
                    </h2>
                </div>
                
                <div class="middle-picture">
                    <img src="./images/perfect-score.jpg">
                </div>

                <div class="button-container">   
                        <button type="button" class="resetButton">
                            TRY AGAIN?
                        </button>
                </div>  
            </section>
            
        </div>
   `)
   }
   else{
      $('main').html(`<div class="flex-box final-silde">
                <section class="endingBox box">
                    <div class="middleTitle">
                        <h2>
                        Do you want to try again? 
                        </h2>
                    </div>
                    
                    <div class="middle-picture">
                        <img src="./images/try-again.jpg">
                    </div>
    
                    <div class="button-container">   
                            <button type="button" class="resetButton">
                                Try Again
                            </button>
                    </div>
                </section>
            </div>
      `)
   }
};

/*BUTTONS*/
function submitButton(){
   $('main').on('click', '.submitButton', function(event){
      event.preventDefault();
      let answerSelected = $('input[name=answers]:checked').val();
         if(!answerSelected){
            alert("YOU NEED AN ANSWER!");
         return;    
         }
         if(QUESTIONS[currentQuestion].correct === answerSelected){
            rightAnswer();
            updateScore();
         }
         else{
            wrongAnswer();
         }
   
   });
}

function nextButton(){
   $('main').on('click', '.nextButton', function(event){
      updateQuestion();
      if(currentQuestion === QUESTIONS.length){
         displayResults();
      }
      else{
            $('.reponse-box').replaceWith(questionRender());
            };
   }); 
};

function resetApp(){
   $('main').on('click', '.resetButton', (event) => {
      resetStats();
      $(displayResults()).hide();
      $(questionRender()).show();
    });
}
function resetStats() {
   currentQuestion = 0;
   score = 0;
   questionNumber = 1;
}
   
function quizFunctions(){
startQuiz();
submitButton();
nextButton();
resetApp();
};

$(quizFunctions);