import React, { FC, useState } from "react";

import { doc, setDoc } from "firebase/firestore";

import { Results } from "../Results";
import { db } from "../../constants";
import { getData } from "../../functions";
import { questions } from "../../constants";

export interface AdminRulesProps {
  currentQuestion: number;
  setListenAdmin: () => void;
}
export const AdminRules: FC<AdminRulesProps> = ({
  currentQuestion,
  setListenAdmin,
}) => {
  const [counter, setCounter] = useState<
    { name: string; point: { [key: number]: number } }[]
  >([]);

  if (!counter.length) {
    setTimeout(async () => {
      await getData(setCounter);
    }, 16000);
  }

  const click = async () => {
    await getData(setCounter);
  };

  const nextQuestion = async (i: number) => {
    await setDoc(doc(db, "users", "admin"), {
      question: i,
    });
  };
  const newNewtQuestion = async () => {
    await setDoc(doc(db, "users", "admin"), {
      question: currentQuestion + 1,
    });
    setListenAdmin();
  };
  const renderQuestion = () => {
    let res = [];
    for (let i = 0; i < questions.length; i++) {
      res.push(
        <button key={i} onClick={() => nextQuestion(i)}>
          {i + 1}
        </button>
      );
    }
    return res;
  };

  return (
    <>
      <h1>Текущий вопрос {currentQuestion + 1}</h1>
      <Results counter={counter} />
      <div>
        <button onClick={click}>Обновить результаты</button>
        <button
          disabled={currentQuestion >= currentQuestion}
          onClick={newNewtQuestion}
        >
          next Questions
        </button>
        <>{renderQuestion()}</>
      </div>
    </>
  );
};
