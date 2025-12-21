<<<<<<< HEAD
"use client";
import {useState} from "react";
import CreateCourseInput from "../CreateCourseInput";
import CourseLabelBox from "./common/CourseLabelBox";

export default function CourseItems() {
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const filteredItems = (val: string) => {
    setItems(items.filter((v) => val !== v));
    setText((prev) => {
      const arr = prev.split(",").map((v) => v.trim());
      const filtered = arr.filter((v) => v !== val);
      return filtered.join(",");
    });
  };
  return (
    <CourseLabelBox>
      <label htmlFor="items">준비물</label>
      <ul className="flex gap-2 mb-2 flex-wrap">
        {items.map((val, i) => (
          <li key={i}>
            <button type="button" onClick={() => filteredItems(val)}>
              <span className="px-2 py-1 rounded-xl border border-(--mt-blue-smoke) bg-(--mt-blue-light) text-nowrap">
                {val}
              </span>
            </button>
          </li>
        ))}
      </ul>

=======
import CreateCourseInput from "../CreateCourseInput";

export default function CourseItems() {
  return (
    <>
      <label htmlFor="items">준비물</label>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      <CreateCourseInput
        id="items"
        name="items"
        type="text"
<<<<<<< HEAD
        value={text}
        onChange={(e) => {
          const value = e.target.value;
          setText(value);
          if (value.includes(",")) {
            const splitted = value
              .split(",")
              .map((v) => v.trim())
              .filter(Boolean);

            setItems(splitted);
          }
        }}
        placeholder="준비물을 입력해주세요 ',' 나누어서 작성가능해요."
      />
    </CourseLabelBox>
=======
        placeholder="준비물을 입력해주세요"
      />
    </>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  );
}
