<<<<<<< HEAD
import {InputHTMLAttributes, RefObject} from "react";
interface ICreateCourseInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: RefObject<HTMLInputElement | null>;
  classNames?: string;
}
export default function CreateCourseInput({
  inputRef,
=======
import {InputHTMLAttributes} from "react";
interface ICreateCourseInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  classNames?: string;
}
export default function CreateCourseInput({
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  classNames = "",
  ...props
}: ICreateCourseInputProps) {
  return (
    <input
<<<<<<< HEAD
      ref={inputRef}
=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      {...props}
      className={`w-full p-2 rounded-md bg-(--mt-gray-light) border border-(--mt-gray) ${classNames}`}
    />
  );
}
