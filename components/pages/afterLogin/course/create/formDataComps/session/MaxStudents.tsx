import {InputHTMLAttributes, useId} from "react";
import CreateCourseInput from "../../CreateCourseInput";
interface IMaxStudents extends InputHTMLAttributes<HTMLInputElement> {
<<<<<<< HEAD
  index: number;
}
export default function MaxStudents({index, ...props}: IMaxStudents) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1 [&>label]:font-bold">
      <label htmlFor={`${id}_${index}_maxStudents`}>최대 수강생 수</label>
      <div className="flex items-center gap-2">
        <CreateCourseInput
          id={`${id}_${index}_maxStudents`}
          type="number"
          {...props}
        />
        <span className="font-bold">명</span>
      </div>
=======
  inputId: string;
}
export default function MaxStudents({inputId, ...props}: IMaxStudents) {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}_${inputId}`}>최대 수강생 수</label>
      <CreateCourseInput id={`${id}_${inputId}`} {...props} />
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
    </div>
  );
}
