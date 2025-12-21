import {useId} from "react";
import CreateCourseInput from "../../CreateCourseInput";

interface ISessionDateProps {
<<<<<<< HEAD
  index: number;
  startLabelTxt: string;
  endLabelTxt: string;
=======
  startLabelTxt: string;
  endLabelTxt: string;
  inputId: string;
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  startName: string;
  endName: string;
}
export default function SessionDate({
<<<<<<< HEAD
  index,
=======
  inputId,
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  startLabelTxt,
  endLabelTxt,
  startName,
  endName,
}: ISessionDateProps) {
  const id = useId();
  return (
<<<<<<< HEAD
    <div className="flex items-center gap-3 [&>div>label]:font-bold">
      <div>
        <label htmlFor={`${id}_${index}_start`}>{startLabelTxt}</label>
        <CreateCourseInput
          id={`${id}_${index}_start`}
          name={startName}
          type="time"
        />
      </div>
      <div>
        <label htmlFor={`${id}_${index}_end`}>{endLabelTxt}</label>
        <CreateCourseInput
          id={`${id}_${index}_end`}
          name={endName}
          type="time"
        />
      </div>
=======
    <div>
      <label htmlFor={`${id}_${inputId}_start`}>{startLabelTxt}</label>
      <CreateCourseInput
        id={`${id}_${inputId}_start`}
        name={startName}
        type="time"
      />
      <label htmlFor={`${id}_${inputId}_end`}>{endLabelTxt}</label>
      <CreateCourseInput
        id={`${id}_${inputId}_end`}
        name={endName}
        type="time"
      />
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
    </div>
  );
}
