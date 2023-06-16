import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const questions = [
    {
        question: "Сколько лет Андрею Шандановину",
        answers: [
            { answer: "21", },
            { answer: "22", },
            { answer: "23", right: true },
            { answer: "24", }
        ]
    },
    {
        question: "Что открыл Андрей в морозовке",
        answers: [
            { answer: "Банку пива", right: true },
            { answer: "Баскетбол",  },
            { answer: "Америку",  },
            { answer: "КВН",  }
        ]
    },
    {
        question: "Каких букв нет в имени Андрей",
        answers: [
            { answer: "А",  },
            { answer: "Г", right: true },
            { answer: "Д",  },
            { answer: "Н",  }
        ]
    },
    {
        question:
            "Какого цвета футблока, была на Андрее на вечеринке в конезаводе, где были Денис Юля и Никита ",
        answers: [
            { answer: "Белая",  },
            { answer: "Черная", right: true },
            { answer: "Серая",  },
            { answer: "Синяя",  }
        ]
    },
    {
        question: "Кто нарисован слева от Андрея, на его третьей фотографии в вк",
        answers: [
            { answer: "Кот",  },
            { answer: "Собака",  },
            { answer: "Белка",  },
            { answer: "Лиса", right: true }
        ]
    },
    {
        question: "Сколько подарков у Андрея в вк",
        answers: [
            { answer: "60",  },
            { answer: "73",  },
            { answer: "80", right: true },
            { answer: "87",  }
        ]
    },
    {
        question:
            'Сколько сообщений пропустил Андрей в группе "Круги ДНД" пока был на корпаротиве',
        answers: [
            { answer: "290",  },
            { answer: "291",  },
            { answer: "292", right: true },
            { answer: "293", }
        ]
    },
    {
        question:
            "Какого числа опубликована самая первая фотография Андрея в инстаграме",
        answers: [
            { answer: "25 мая 2016", right: true },
            { answer: "26 мая 2016",  },
            { answer: "25 мая 2015",  },
            { answer: "24 мая 2016",  }
        ]
    },
    {
        question: "Что набито на левой груди у Андрея (по мнению Дениса) ",
        answers: [
            { answer: "Плутон", },
            { answer: "Юпитер", },
            { answer: "Венера",},
            { answer: "Сатурн", right: true }
        ]
    },

]

const firebaseConfig = {
    apiKey: "AIzaSyCWwD1aEpxanOpTPTkgRSKYGmDdhc44jEY",
    authDomain: "quiz-b9761.firebaseapp.com",
    projectId: "quiz-b9761",
    storageBucket: "quiz-b9761.appspot.com",
    messagingSenderId: "277365255917",
    appId: "1:277365255917:web:785b6ed3b8380614a026e4",
    databaseURL: "https://quiz-b9761-default-rtdb.europe-west1.firebasedatabase.app/",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const user = localStorage.getItem("user");

