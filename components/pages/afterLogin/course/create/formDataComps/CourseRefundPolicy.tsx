<<<<<<< HEAD
import CourseLabelBox from "./common/CourseLabelBox";

export default function CourseRefundPolicy() {
  return (
    <CourseLabelBox>
=======
export default function CourseRefundPolicy() {
  return (
    <>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      <label htmlFor="refundPolicy">환불 정책</label>
      <textarea
        id="refundPolicy"
        name="refundPolicy"
        className="border border-(--mt-gray) bg-(--mt-gray-light) p-3 rounded-md resize-none"
        rows={5}
        placeholder="환불 정책을 작성해주세요."
      />
<<<<<<< HEAD
    </CourseLabelBox>
=======
    </>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  );
}
