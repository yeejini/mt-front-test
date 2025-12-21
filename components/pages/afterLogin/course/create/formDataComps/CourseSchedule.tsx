<<<<<<< HEAD
import {InputHTMLAttributes, useId} from "react";
import CreateCourseInput from "../CreateCourseInput";
import CourseLabelBox from "./common/CourseLabelBox";
interface ICourseSchedule extends InputHTMLAttributes<HTMLInputElement> {
  labelId: string;
  inputName: string;
}
export default function CourseSchedule({
  labelId,
  inputName,
  ...props
}: ICourseSchedule) {
  const id = useId();
  return (
    <CourseLabelBox>
      <label htmlFor={`${id}_${labelId}`}>일자</label>
      <CreateCourseInput
        id={`${id}_${labelId}`}
        name={inputName}
        type="text"
        {...props}
      />
    </CourseLabelBox>
=======
import CreateCourseInput from "../CreateCourseInput";

export default function CourseSchedule() {
  return (
    <>
      <label htmlFor="schedule">일자</label>
      <CreateCourseInput
        id="schedule"
        name="schedule"
        type="date"
        placeholder="일자"
      />
    </>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  );
}
