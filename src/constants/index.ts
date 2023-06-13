import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const questions = [
    {
        question: 'где раки зимуют',
        img:'https://kakoy-smysl.ru/wp-content/uploads/2020/04/TASS_1572812_d_850.jpg',
        answers: [
            { answer: 'в пизде', right: true },
            { answer: 'в пизде' },
            { answer: 'в пизде' },
            { answer: 'в пизде' }
        ]
    },
    {
        question: 'а рыба где',
        answers: [
            { answer: 'в пизде', right: true },
            { answer: 'в пизде' },
            { answer: 'в пизде' },
            { answer: 'в пизде' }
        ],
        img:'https://kakoy-smysl.ru/wp-content/uploads/2020/04/TASS_1572812_d_850.jpg',

    },
    {
        question: 'дом для улитки',
        answers: [
            { answer: 'в пизде', right: true },
            { answer: 'в пизде' },
            { answer: 'в пизде' },
            { answer: 'в пизде' }
        ],
        img:'https://kakoy-smysl.ru/wp-content/uploads/2020/04/TASS_1572812_d_850.jpg',

    },
    {
        question: 'прпрпрппр',
        answers: [
            { answer: 'в пизде', right: true },
            { answer: 'в пизде' },
            { answer: 'в пизде' },
            { answer: 'в пизде' }
        ],
        img:'https://kakoy-smysl.ru/wp-content/uploads/2020/04/TASS_1572812_d_850.jpg',

    },
    {
        question: 'клизма',
        answers: [
            { answer: 'в пизде', right: true },
            { answer: 'в пизде' },
            { answer: 'в пизде' },
            { answer: 'в пизде' }
        ],

        img:'https://kakoy-smysl.ru/wp-content/uploads/2020/04/TASS_1572812_d_850.jpg',

    },
    {
        question: 'gena',
        answers: [
            { answer: 'в пизде', right: true },
            { answer: 'в пизде' },
            { answer: 'в пизде' },
            { answer: 'в пизде' }
        ],
        img:'https://kakoy-smysl.ru/wp-content/uploads/2020/04/TASS_1572812_d_850.jpg',

    },
    {
        question: 'lena',
        answers: [
            { answer: 'в пизде', right: true },
            { answer: 'в пизде' },
            { answer: 'в пизде' },
            { answer: 'в пизде' }
        ],
        img:'https://kakoy-smysl.ru/wp-content/uploads/2020/04/TASS_1572812_d_850.jpg',

    },
    
]

const firebaseConfig = {
    apiKey: "AIzaSyCWwD1aEpxanOpTPTkgRSKYGmDdhc44jEY",
    authDomain: "quiz-b9761.firebaseapp.com",
    projectId: "quiz-b9761",
    storageBucket: "quiz-b9761.appspot.com",
    messagingSenderId: "277365255917",
    appId: "1:277365255917:web:785b6ed3b8380614a026e4",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const user = localStorage.getItem("user");

