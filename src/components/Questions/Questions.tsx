import React, { FC, useState, useEffect, useRef } from "react";
import { QuestionsStyle, HeadingStyle } from "./Questions.style";
import { QuestionButton } from "./QuestionButton";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { user } from "../../constants";
import { getDataDB } from "../../functions";
import { Loader } from "../Loader";
import { getData as getResults } from "../../functions";
import { Results } from "../Results";

export interface QuestionProps {
  data: {
    question: string;
    answers: { answer: string; right?: boolean }[];
    img?: string;
  };
  id: number;
  setListenAdmin: () => void;
}

export const Questions: FC<QuestionProps> = ({ data, id, setListenAdmin }) => {
  const { question, answers, img } = data;
  const [disabled, setDisabled] = useState(false);
  const [loader, setLoader] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [disabledCurrentQuestion, setDisabledCurrentQuesyion] = useState(false);
  const [counter, setCounter] = useState<
    { name: string; point: { [key: number]: number } }[]
  >([]);

  const imgRef=useRef(null)

  const getData = async () => {
    const func = (doc: QueryDocumentSnapshot<DocumentData>) => {
      if (doc.id === user && (doc.data()[id] || doc.data()[id] === 0)) {
        setDisabledCurrentQuesyion(true);
      }
    };
    await getDataDB(func);
    if(img){
      await  fetch(img).then((res)=>{
        if(res){
          setLoader(false)
        }
      })

    }else{
      setLoader(false);
    }
  };

  useEffect(() => {
    if (showResults) {
      getResults(setCounter);
    }
  }, [showResults]);

  useEffect(() => {
    getData();
  }, []);

  const renderAnswers = answers.map(({ answer, right }, i) => {
    return (
      <QuestionButton
        key={answer + i + id + question}
        answer={answer}
        right={right}
        disabled={disabled}
        setDisabled={setDisabled}
        id={id}
        setListenAdmin={setListenAdmin}
        setShowResults={() => setShowResults(true)}
      />
    );
  });

  if (loader) {
    return <Loader />;
  }

  if (disabledCurrentQuestion) {
    setListenAdmin();
    return <h1> Вы уже отвечали на этот вопрос, ждите</h1>;
  }

  if (counter.length > 0) {
    return <Results counter={counter} />;
  }

  return (
    <>
      <QuestionsStyle>
        {img && <img ref={imgRef} width={"30%"} src={img} alt="" />}
        <HeadingStyle>{question}</HeadingStyle>
        <QuestionsStyle>{renderAnswers}</QuestionsStyle>
      </QuestionsStyle>
    </>
  );
};
