"use client";

import {useRef, useState} from "react";
import CourseTypeBtn from "./common/CourseTypeBtn";
type TLessonForm = "WALK" | "GROUP" | "PRIVATE";
export default function CourseLessonForm() {
  const [state, setState] = useState<TLessonForm>("WALK");
  const walkRef = useRef<HTMLInputElement | null>(null);
  const groupRef = useRef<HTMLInputElement | null>(null);
  const privateRef = useRef<HTMLInputElement | null>(null);

  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-2">
=======
    <div className="flex flex-col gap-2 ">
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      <h5 className="font-bold">수업 형태</h5>
      <div className="flex justify-between gap-3 [&>div]:w-full [&>div]:flex [&>div]:items-center [&>div]:gap-2">
        <CourseTypeBtn
          labelFor="walk"
          labelTxt="산책"
          name="lessonForm"
          inputRef={walkRef}
          inputValue="WALK"
          isActive={state === "WALK"}
          handleFn={() => setState("WALK")}
          defaultChecked
        />
        <CourseTypeBtn
          labelFor="group"
          labelTxt="그룹"
          name="lessonForm"
          inputRef={groupRef}
          inputValue="GROUP"
          isActive={state === "GROUP"}
          handleFn={() => setState("GROUP")}
        />
        <CourseTypeBtn
          labelFor="private"
          labelTxt="개인"
          name="lessonForm"
          inputRef={privateRef}
          inputValue="PRIVATE"
          isActive={state === "PRIVATE"}
          handleFn={() => setState("PRIVATE")}
        />
      </div>
    </div>
  );
}
