import CreateCourseInput from "../CreateCourseInput";
<<<<<<< HEAD
import CourseLabelBox from "./common/CourseLabelBox";
interface ICourseLocation {
  labelTxt: string;
  inputName: string;
  placeholder: string;
}
export default function CourseLocation({
  inputName,
  labelTxt,
  placeholder,
}: ICourseLocation) {
  return (
    <CourseLabelBox>
      <label htmlFor={inputName}>{labelTxt}</label>
      <CreateCourseInput
        id={inputName}
        name={inputName}
        type="text"
        placeholder={placeholder}
      />
    </CourseLabelBox>
=======

export default function CourseLocation() {
  return (
    <>
      <label htmlFor="location">훈련 장소</label>
      <CreateCourseInput
        id="location"
        name="location"
        type="text"
        placeholder="훈련 장소"
      />
    </>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  );
}
