import React, { useState, useRef } from "react";
import { WrapperPage } from "../components/WrapperPage";
import { doc, setDoc } from "firebase/firestore";
import { questions, user } from "../constants";
import { Questions } from "../components/Questions";
import { getDataDB } from "../functions";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { AdminRules } from "../components/AdminRules";
import { db } from "../constants";

const Game = () => {
  const [start, setStart] = useState(null);
  const [listenAdmin, setListenAdmin] = useState(false);

  const ref = useRef(null);

  const disusers: string[] = [];

  const changeQuestion = async () => {
    const interval = setInterval(async () => {
      const func = (doc: QueryDocumentSnapshot<DocumentData>) => {
        if (doc.id === "admin") {
          if (
            (doc.data().question || doc.data().question === 0) &&
            start !== doc.data().question
          ) {
            console.log("a");
            clearInterval(interval);
            setStart(doc.data().question || 0);
          }
        } else {
          const cur = ref.current as unknown as HTMLElement;
          if (cur && !disusers.includes(doc.id)) {
            const li = document.createElement("li");
            li.innerText = doc.id;
            cur.appendChild(li);
            disusers.push(doc.id);
          }
        }
      };
      await getDataDB(func);
    }, 1000);
  };

  if (!start) {
    changeQuestion();
  }

  const startGame = async () => {
    await setDoc(doc(db, "users", "admin"), {
      question: 0,
    });
  };

  if (listenAdmin) {
    changeQuestion();
    // setListenAdmin(false)
  }

  if (user === "admin") {
    return (
      <WrapperPage>
        <>
          {start || start === 0 ? (
            <AdminRules
              currentQuestion={start}
              setListenAdmin={() => setListenAdmin(true)}
            />
          ) : (
            <>
              <h1>Добрый день ваше высочество</h1>
              <h2>Джентельмены подключились</h2>
              <ul ref={ref} />
              <button onClick={startGame}>start</button>
            </>
          )}
        </>
      </WrapperPage>
    );
  }

  return (
    <WrapperPage showHeader={true}>
      <>
        {start || start === 0 ? (
          <Questions
            key={start}
            setListenAdmin={() => setListenAdmin(true)}
            data={questions[start]}
            id={start}
          />
        ) : (
          <>
            <h1 style={{textAlign:"center"}}>Привет {user}, <br/> подожди немного, игра скоро начнется</h1>
          </>
        )}
      </>
    </WrapperPage>
  );
};

export default Game;
