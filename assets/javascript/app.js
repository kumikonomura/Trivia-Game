// Variables for the ending results
let correctAnswers =0
let wrongAnswers = 0
let notAnswered = 0



// Questions
let questions = [{
    question: `In the 2012 movie, The Avengers features Captain America. What is his real name?`,
    answers: {
        a: "Buck Rogers", 
        b: "Ted Rogers",
        c: "Steve Rogers",
        d: "Tony Stark",
    },
    correctAnswer: "Steve Rogers"
  }, {
    question: `Who is the leader of S.H.I.E.L.D?`,
    answers: {
        a: "Nick Fury", 
        b: "Tony Stark", 
        c: "Bruce Banner",
        d: "Diana Prince",
    },
    correctAnswer: "Nick Fury"
  }, {
    question: `Which superhero does Bruce Banner transform into?`,
    answers: {
        a: "Iron Man", 
        b: "Hawkeye",
        c: "Thor",
        d: "Hulk",
    },
    correctAnswer: "The Hulk"
  }, {
    question: `Who is Loki's adoptive brother?`,
    answers: {
        a: "Thor",
        b: "Tony Stark", 
        c: "Peter Parker", 
        d: "Bruce Wayne",
    },
    correctAnswer: "Thor"
  }, {
    question: `What's the name of the mysterious blue glowing cube that Loki uses as a weapon?`,
    answers: {
        a: "The Orb",
        b: "Tesseract",
        c: "The Force",
        d: "UV Lamp",
    },
    correctAnswer: "Tesseract"
  }, {
    question: `In Avengers: Infinity War, what is the name of the villain who's on a mission to collect the infinity stones?`,
    answers: {
        a: "Malekith",
        b: "Thanos", 
        c: "Darren Cross",
        d: "Helmut Demo",
    },
    correctAnswer: "Thanos"
  }, {
    question: `How does Black Widow turn the Hulk back into Bruce Banner?`,
    answers: {
        a: "By asking politely",
        b: "With a text message",
        c: "With a lullaby",
        d: "With a special potion",
    },
    correctAnswer: "With a lullaby",
  }, {
    question: `What is Clint Barton's superhero name?`,
    answers: {
        a: "Black Panther",
        b: "Hawkeye",
        c: "Iron Man",
        d: "Thor",
    correctAnswer: "Hawkeye"
    },
  }];

//   console.log(questions);

//   <!-- JAVASCRIPT -->
// <!-- [ -->
// <!-- question objects -->
// <!-- ] -->

// <!-- {questionId, isCorrect} -->

// function to display question
// question tracker
let qTracker = 0
function renderQuestion (index) {
    let currentQuestionElement = document.getElementById('current-question')
    currentQuestionElement.innerHTML = questions[index].question 
}


// declares a function (it's only declaring itself, not running itself)
function nextQuestion () {
    // checks if qTracker is 0, Is it? Yes it is
    if (qTracker === 0) {
        // invokes renderQuestion function, passing in qTracker value in as a parameter
        renderQuestion(qTracker)
        renderChoices(qTracker)
        qTracker = 1
    } else {
        qTracker +=1
        renderQuestion(qTracker)
        renderChoices(qTracker)
    }
}

function renderChoices (index) {
    let option1EL = document.getElementById('A')
    let option2EL = document.getElementById('B')
    let option3EL = document.getElementById('C')
    let option4EL = document.getElementById('D')

    let option1 = questions[index].answers.a
    let option2 = questions[index].answers.b
    let option3 = questions[index].answers.c
    let option4 = questions[index].answers.d

    option1EL.innerHTML = option1
    option2EL.innerHTML = option2
    option3EL.innerHTML = option3
    option4EL.innerHTML = option4
}

let answers = document.getElementsByClassName('answer')

document.getElementById('start').addEventListener('click', ()=> {
    // console.log('hello')
    nextQuestion()
})

function checkAnswer(option) {
    const qTrackerOffset = qTracker - 1
    const userChoice = questions[qTrackerOffset].answers[option]
    const correctAnswer = questions[qTrackerOffset].correctAnswer
    console.log(userChoice)
    console.log(correctAnswer)
    // console.log(option)
}

// Comparison If and Else 



// <!-- render choices (data-value = true or false) -->

// <!-- whenever we click a choice -->
// <!-- set the clicked one to look different -->
// <!-- set all others to go back to default -->
// <!-- modify the question object to have value for whether they answered right or wrong -->

// <!-- whenever finish game button is clicked OR the timer runs out -->
// <!-- iterate over questions, count up isCorrect -->