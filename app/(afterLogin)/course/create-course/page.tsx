import CreateCourse from "@/components/pages/afterLogin/course/create/formDataComps/CreateCourse";
import {Metadata} from "next";
export const metadata: Metadata = {
  title: "수업생성하기",
};
export default function page() {
  return (
<<<<<<< HEAD
    <div className="w-full h-full overflow-y-auto">
=======
    <div className="w-full h-full p-6">
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      <CreateCourse />
    </div>
  );
}
