import React, { useEffect, useState } from "react";
import { WrapperPage } from "../components/WrapperPage";

import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

import { addUsersPoints, getDataDB } from "../functions";

const Auth = () => {
  const [state, setState] = useState("");
  const [alert, setAlert] = useState(false);
  const [loader, setLoader] = useState(false);

  const nav = useNavigate();

  const onChange = (name: string) => {
    setState(name);
  };

  const addPlayer = async () => {
    setLoader(true);
    const disabledName = ["vorobey"];

    const func = (doc: QueryDocumentSnapshot<DocumentData>) => {
      doc.id && disabledName.push(doc.id);
    };

    await getDataDB(func);

    if (disabledName.includes(state) && state !== "admin") {
      setAlert(!alert);
      setLoader(false);
      setState("");
    } else {
      const func = () => {
        localStorage.setItem("user", state);
        window.location.href = "/game";
        setLoader(false);
      };

      await addUsersPoints(state, {}, func);
    }
  };

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(!alert);
      }, 3000);
    }
  }, [alert]);

  return (
    <WrapperPage>
      <>
        {loader ? (
          <>
            <h1> Дождитесь входа в игру</h1>
            <Loader />
          </>
        ) : (
          <>
            {alert && <h2>Упс такое имя уже занято, выберите другое</h2>}
            <input
              type="text"
              onChange={({ target }) => onChange(target.value)}
            />
            <button onClick={addPlayer}>Добавить игрока</button>
          </>
        )}
        {/* <Questions data={questions[0]} /> */}
      </>
    </WrapperPage>
  );
};

export default Auth;
