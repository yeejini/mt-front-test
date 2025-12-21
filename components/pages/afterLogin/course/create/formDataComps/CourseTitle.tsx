import CreateCourseInput from "../CreateCourseInput";
<<<<<<< HEAD
import CourseLabelBox from "./common/CourseLabelBox";

export default function CourseTitle() {
  return (
    <CourseLabelBox>
=======

export default function CourseTitle() {
  return (
    <>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      <label htmlFor="title">훈련 제목</label>
      <CreateCourseInput
        id="title"
        name="title"
        type="text"
        placeholder="훈련 제목"
      />
<<<<<<< HEAD
    </CourseLabelBox>
=======
    </>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  );
}
