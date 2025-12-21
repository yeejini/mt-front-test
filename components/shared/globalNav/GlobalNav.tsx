"use client";
<<<<<<< HEAD
import { CalendarDaysIcon } from "@/components/icons/calendar";
import { HomeIcon } from "@/components/icons/home";
import { MagnifyingGlassIcon } from "@/components/icons/search";
import { StarIcon } from "@/components/icons/start";
import { UserIcon } from "@/components/icons/user";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
=======
import {CalendarDaysIcon} from "@/components/icons/calendar";
import {HomeIcon} from "@/components/icons/home";
import {MagnifyingGlassIcon} from "@/components/icons/search";
import {StarIcon} from "@/components/icons/start";
import {UserIcon} from "@/components/icons/user";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451

interface IGlobalNavListProps {
  to: string;
  icon: ReactNode;
  txt: string;
}
<<<<<<< HEAD
function GlobalNavList({ to, txt, icon }: IGlobalNavListProps) {
=======
function GlobalNavList({to, txt, icon}: IGlobalNavListProps) {
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  const path = usePathname();
  return (
    <li>
      <Link href={to} className={`${path === to && "text-(--mt-blue-point)"}`}>
        <i>{icon}</i>
        <span>{txt}</span>
      </Link>
    </li>
  );
}

export default function GlobalNav() {
  return (
    <nav className="p-5 bg-white shadow-[0px_1px_20px_rgba(0,0,0,0.2)]">
      <ul className="flex justify-between *:[&>a]:flex *:[&>a]:flex-col *:[&>a]:justify-center *:[&>a]:items-center *:[&>a]:gap-1  *:[&>a]:w-10 *:[&>a>i]:size-6">
        <GlobalNavList to="/" txt="홈" icon={<HomeIcon />} />
        <GlobalNavList to="/plan" txt="일정" icon={<CalendarDaysIcon />} />
<<<<<<< HEAD
        <GlobalNavList
          to="/course/search"
          txt="검색"
          icon={<MagnifyingGlassIcon />}
        />
=======
        <GlobalNavList to="/search" txt="검색" icon={<MagnifyingGlassIcon />} />
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
        <GlobalNavList to="/wishlit" txt="찜" icon={<StarIcon />} />
        <GlobalNavList to="/mypage" txt="MY" icon={<UserIcon />} />
      </ul>
    </nav>
  );
}
