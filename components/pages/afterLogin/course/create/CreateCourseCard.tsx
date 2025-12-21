import {ReactNode} from "react";
interface ICreateCourseCard {
<<<<<<< HEAD
  children: ReactNode;
}
export default function CreateCourseCard({children}: ICreateCourseCard) {
  return (
    <div
      className={`flex flex-col gap-3 shadow p-3 rounded-md bg-(--mt-white) `}
=======
  classNames?: string;
  children: ReactNode;
}
export default function CreateCourseCard({
  classNames = "",
  children,
}: ICreateCourseCard) {
  return (
    <div
      className={`flex flex-col gap-3 shadow p-3 rounded-md bg-(--mt-white) ${classNames}`}
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
    >
      {children}
    </div>
  );
}
