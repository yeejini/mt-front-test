"use client";
import {XMarkIcon} from "@/components/icons/xMark";
import useCheckLoggedIn from "@/hooks/afterLogin/users/useCheckLoggedIn";
import useLogout from "@/hooks/afterLogin/users/useLogout";
import {useDrawer} from "@/stores/drawerState";
import {useRouter} from "next/navigation";

export default function DrawerHeader() {
  const router = useRouter();
  const {offToggle} = useDrawer();
  const {data: check, resetUserCheck} = useCheckLoggedIn();
  const {refetch} = useLogout();
  // functions
  /* 로그인페이지 이동 */
  const goToLogin = () => {
<<<<<<< HEAD
    offToggle();
    router.push("/login");
=======
    router.push("/login");
    offToggle();
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  };
  const handleLogout = async () => {
    await refetch();
    resetUserCheck();
    offToggle();
    router.push("/");
  };
<<<<<<< HEAD

=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  return (
    <>
      <li>
        <button onClick={offToggle}>
          <i>
            <XMarkIcon className="size-10 text-(--mt-white)" />
          </i>
        </button>
      </li>
<<<<<<< HEAD
      {check && "userId" in check ? (
        <li>
          <button
            onClick={handleLogout}
            className="bg-(--mt-white) px-2 py-1 rounded-lg font-semibold text-sm hover:bg-(--mt-blue-light) hover:outline-2 hover:outline-(--mt-blue-point) transition-colors ease-in-out duration-200"
          >
            로그아웃
          </button>
        </li>
      ) : (
=======
      {!check ? (
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
        <li>
          <button
            onClick={goToLogin}
            className="bg-(--mt-white) px-2 py-1 rounded-lg font-semibold text-sm hover:bg-(--mt-blue-light) hover:outline-2 hover:outline-(--mt-blue-point) transition-colors ease-in-out duration-200"
          >
            로그인
          </button>
        </li>
<<<<<<< HEAD
=======
      ) : (
        <li>
          <button
            onClick={handleLogout}
            className="bg-(--mt-white) px-2 py-1 rounded-lg font-semibold text-sm hover:bg-(--mt-blue-light) hover:outline-2 hover:outline-(--mt-blue-point) transition-colors ease-in-out duration-200"
          >
            로그아웃
          </button>
        </li>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      )}
    </>
  );
}
