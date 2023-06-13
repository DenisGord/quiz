import { addUsersPoints, getDataDB } from "../../functions";
import { ButtonStyle, TextStyled } from "./Questions.style";
import React, { useRef, FC, useEffect } from "react";
import { user } from "../../constants";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

export interface QuestionButtonProps {
  answer: string;
  right?: boolean;
  disabled: boolean;
  setDisabled: (val: boolean) => void;
  id: number;
  setListenAdmin: () => void;
  setShowResults: () => void;
}

export const QuestionButton: FC<QuestionButtonProps> = ({
  answer,
  right,
  disabled,
  setDisabled,
  id,
  setListenAdmin,
  setShowResults,
}) => {
  const ref = useRef(null);
  let sec = 150;

  useEffect(() => {
    const interval = setInterval(async () => {
      sec = sec - 1;
      const cur = ref.current as unknown as HTMLElement;

      if (cur && cur.style) {
        cur.style.width = `${(sec * 100) / 150}%`;
      }
      if (sec <= 0) {
        if (cur && right) {
          cur.style.background = "#41B3A3";
          cur.style.width = "100%";
        }

        let obj = {};
        let changed = false;
        const func = (doc: QueryDocumentSnapshot<DocumentData>) => {
          if (doc.id === user) {
            obj = doc.data();

            if (
              !obj[id as keyof typeof obj] ||
              obj[id as keyof typeof obj] === 0
            ) {
              changed = true;
            }
          }
        };
        await getDataDB(func);

        if (changed) {
          await addUsersPoints(user as string, { ...obj, [id]: 0 }, () => {});
        }

        clearInterval(interval);
        setTimeout(() => {
          setShowResults();
        }, 2000);
        setDisabled(true);
        setListenAdmin();
      }
    }, 100);
  }, []);

  const click = async () => {
    setDisabled(true);
    let obj = {};
    const func = (doc: QueryDocumentSnapshot<DocumentData>) => {
      if (doc.id === user) {
        obj = doc.data();
      }
    };
    await getDataDB(func);

    if (right) {
      const point = Math.floor((sec * 100) / 150);

      await addUsersPoints(user as string, { ...obj, [id]: point }, () => {});
    } else {
      await addUsersPoints(user as string, { ...obj, [id]: 0 }, () => {});
    }
  };

  return (
    <ButtonStyle disabled={disabled} onClick={click}>
      <div
        ref={ref}
        style={{
          background: "#E27D60",
          height: "48px",
          width: "100%",
          borderRadius: "20px",
        }}
      />

      <TextStyled>{answer}</TextStyled>
    </ButtonStyle>
  );
};
