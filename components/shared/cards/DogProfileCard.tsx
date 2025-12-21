"use client";
import Image from "next/image";
<<<<<<< HEAD
import { IDogProfileType } from "@/types/dog/dogType";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons/chevron";
import { DogIcon } from "@/components/icons/dog";
=======
import { useState } from "react";
import { IDogProfileType } from "@/types/dog/dogType";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons/chevron";
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451

interface IDogProfileCardProps {
  dog: IDogProfileType;
}

export default function DogProfileCard({ dog }: IDogProfileCardProps) {
<<<<<<< HEAD
  return (
    <Link href={`/mydogs/${dog.dogId}`}>
      <article className="p-4 bg-gray-100 rounded-2xl flex items-center gap-3 hover:bg-gray-200 transition-colors cursor-pointer">
=======
  const [randomInt] = useState(() => Math.floor(Math.random() * 10));
  const bgClass = [
    "bg-red-200",
    "bg-orange-200",
    "bg-yellow-200",
    "bg-lime-200",
    "bg-green-200",
    "bg-teal-200",
    "bg-blue-200",
    "bg-sky-200",
    "bg-indigo-200",
    "bg-pink-200",
  ];

  return (
    <Link href={`/mydogs/${dog.dogId}`}>
      <article className="p-4 bg-(--mt-gray-light) rounded-2xl flex items-center gap-3 hover:bg-(--mt-gray) transition-colors cursor-pointer">
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
        {/* 프로필 이미지 */}
        <div className="overflow-hidden size-16 rounded-full relative flex-shrink-0">
          {dog.profileImage && dog.profileImage.trim() ? (
            <Image
              src={dog.profileImage}
              alt={dog.name}
              fill
              sizes="64px"
              className="object-cover"
              priority
            />
          ) : (
<<<<<<< HEAD
            <div
              className="flex items-center justify-center size-16 rounded-full"
              style={{
                backgroundColor: `hsl(${(dog.dogId * 137.5) % 360}, 70%, 80%)`,
              }}
            >
              <DogIcon className="size-8 text-white" />
            </div>
=======
            <div className={`${bgClass[randomInt]} size-16 rounded-full`} />
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
          )}
        </div>

        {/* 기본 정보 */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-(--mt-black)">{dog.name}</h3>
<<<<<<< HEAD
          <div className="flex items-center gap-2 mt-1">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                dog.gender === "M"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-pink-100 text-pink-700"
              }`}
            >
              {dog.gender === "M" ? "남" : "여"}
            </span>
            <p className="text-sm text-(--mt-gray)">
              {dog.age}살 · {dog.breed}
            </p>
          </div>
=======
          <p className="text-sm text-(--mt-gray)">
            {dog.breed} · {dog.age}살
          </p>
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
        </div>

        {/* 화살표 아이콘 */}
        <ChevronRightIcon className="size-6 text-(--mt-gray) flex-shrink-0" />
      </article>
    </Link>
  );
}
