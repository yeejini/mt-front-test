"use client";

<<<<<<< HEAD
import {useCallback, useRef} from "react";
import CourseTypeBtn from "./common/CourseTypeBtn";
import {useSessionState} from "@/stores/sessionState";

export default function CourseIsFree() {
  const {free, setFreeTrue, setFreeFalse, setPrice} = useSessionState();

=======
import {useCallback, useRef, useState} from "react";
import CourseTypeBtn from "./common/CourseTypeBtn";

export default function CourseIsFree() {
  const [state, setState] = useState(true);
  const [price, setPrice] = useState("");
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  const freeRef = useRef<HTMLInputElement | null>(null);
  const nonFreeRef = useRef<HTMLInputElement | null>(null);
  /* fn */
  const handleTruePrice = useCallback(() => {
<<<<<<< HEAD
    setPrice(0);
    setFreeTrue();
  }, [setFreeTrue, setPrice]);
  const handleFalsePrice = useCallback(() => {
    setPrice(null);
    setFreeFalse();
  }, [setFreeFalse, setPrice]);
  return (
    <div className="flex flex-col gap-2 justify-around *:flex *:gap-2">
=======
    setPrice("");
    setState(true);
  }, []);
  const handleFalsePrice = useCallback(() => {
    setPrice("0");
    setState(false);
  }, []);
  return (
    <>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      <h5 className="font-bold">유료 / 무료</h5>
      <div className="w-full flex justify-around *:w-full">
        <CourseTypeBtn
          labelFor={"free"}
          labelTxt={"무료"}
          inputRef={freeRef}
          name="isFree"
          inputValue={"true"}
<<<<<<< HEAD
          isActive={free}
=======
          isActive={state}
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
          handleFn={handleTruePrice}
          defaultChecked
        />
        <CourseTypeBtn
          labelFor={"nonFree"}
          labelTxt={"유료"}
          name="isFree"
          inputRef={nonFreeRef}
          inputValue={"false"}
<<<<<<< HEAD
          isActive={!free}
          handleFn={handleFalsePrice}
        />
      </div>
    </div>
=======
          isActive={!state}
          handleFn={handleFalsePrice}
        />
      </div>
    </>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  );
}
