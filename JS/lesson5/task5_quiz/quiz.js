const option1 = document.querySelector('.option1'),
    option2 = document.querySelector('.option2'),
    option3 = document.querySelector('.option3'),
    option4 = document.querySelector('.option4');

const allOptions = document.querySelectorAll('.option');
const question = document.getElementById('question');

const numberOfQuestion = document.getElementById('number-of-question'),
    numberOfAllQuestions = document.getElementById('number-of-all-questions');

let indexOfQuestion,
    indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');

let score = 0;
const correctAnswer = document.getElementById('correct-answer'),
    numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
    btnTyrAgain = document.getElementById('btn-try-again');

const questions = [{
        question: 'Какое стихийное бедствие измеряется по шкале Рихтера?',
        options: [
            'Торнадо',
            'Землетрясения',
            'Наводнения',
            'Ураган',
        ],

        rightAnswer: 1
    },
    {
        question: 'Какая планета находится ближе всего к Солнцу?',
        options: [
            'Земля',
            'Марс',
            'Меркурий',
            'Венера',
        ],

        rightAnswer: 2
    },
    {
        question: 'Из какого вещества состоят ногти?',
        options: [
            'Серотонин',
            'Эпидермис',
            'Меланин',
            'Кератин',
        ],

        rightAnswer: 3
    },
    {
        question: 'Что означает термин ДНК?',
        options: [
            'Дезоксирибонуклеарная кислота',
            'Дуорибонуклеиновая кислота',
            'Дуоксирибонуклеиновая кислота',
            'Дезоксирибонуклеиновая кислота',
        ],

        rightAnswer: 3
    },
    {
        question: 'Кто был первым человеком, увидевшим луны Юпитера?',
        options: [
            'Галилео Галилей',
            'Альберт Эйнштейн',
            'Исаак Ньютон',
            'Николай Коперник',
        ],

        rightAnswer: 0
    },
    {
        question: 'Кто была первой женщиной, получившей Нобелевскую премию в 1903 году?',
        options: [
            'Перл Бак',
            'Розалинд Франклин',
            'Мария Кюри',
            'Джейн Аддамс',
        ],

        rightAnswer: 2
    },
]

numberOfAllQuestions.innerHTML = questions.length;

function load() {
    question.innerHTML = questions[indexOfQuestion].question;

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++;
}

let completedAnswers = [];

function randomQuestion() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDublicate = false;

    if (indexOfPage == questions.length) {
        quizOver()
    } else {
        if (completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if (item == randomNumber) {
                    hitDublicate = true;
                }
            });
            if (hitDublicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if (completedAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};
const checkAnswer = el => {
    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct')
        updateAnswerTracker('correct');
        score++;
    } else {
        el.target.classList.add('wrong')
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

for (option of allOptions) {
    option.addEventListener('click', event => checkAnswer(event))
}

const disabledOptions = () => {
    allOptions.forEach(item => {
        item.classList.add('disabled');
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
}

const enableOptions = () => {
    allOptions.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
}

const updateAnswerTracker = status => {
answersTracker.children[indexOfPage-1].classList.add(`${status}`);
}

const validation = () => {
    if (!allOptions[0].classList.contains('disabled')) {
        alert('Выбирете один из вариантов ответа!')
    } else {
        randomQuestion();
        enableOptions();
    }
}

function quizOver() {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
    window.location.reload();
}

btnTyrAgain.addEventListener('click', tryAgain);

btnNext.addEventListener('click', validation);
window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
});