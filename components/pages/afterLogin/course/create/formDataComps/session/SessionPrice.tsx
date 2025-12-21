"use client";

import {InputHTMLAttributes, useId} from "react";
import CreateCourseInput from "../../CreateCourseInput";
<<<<<<< HEAD
import CourseLabelBox from "../common/CourseLabelBox";

interface ISessionPriceProps extends InputHTMLAttributes<HTMLInputElement> {
  index: number;
  inputId: string;
  state: boolean;
  classNames?: string;
}
export default function SessionPrice({
  index,
=======

interface ISessionPriceProps extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string;
  state?: boolean;
  classNames?: string;
}
export default function SessionPrice({
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  inputId,
  state = false,
  classNames = "",
  ...props
}: ISessionPriceProps) {
  const id = useId();
  return (
<<<<<<< HEAD
    <CourseLabelBox>
      <label htmlFor={`${id}_${index}_${inputId}`}>가격</label>
      <div className="flex items-center gap-2">
        <CreateCourseInput
          id={`${id}_${index}_${inputId}`}
          classNames={classNames}
          {...props}
          readOnly={state}
        />
        <span className="font-bold">원</span>
      </div>
    </CourseLabelBox>
=======
    <div className="flex flex-col gap-1">
      <h5 className="font-bold">가격</h5>
      <CreateCourseInput
        id={`${id}_${inputId}`}
        {...props}
        readOnly={state}
        classNames={classNames}
      />
    </div>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  );
}
