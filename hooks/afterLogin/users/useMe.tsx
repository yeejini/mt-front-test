<<<<<<< HEAD
import { usersApi } from "@/apis/users/usersApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useMe() {
  const router = useRouter();
  const { data, isPending, isError } = useQuery({
=======
import {usersApi} from "@/apis/users/usersApi";
import {useQuery} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function useMe() {
  const router = useRouter();
  const {data, isPending, isError} = useQuery({
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
    queryKey: ["me"],
    queryFn: () => usersApi.me(),
    retry: false,
  });
  useEffect(() => {
    if (isError) {
      router.replace("/login");
    }
  }, [isError, router]);
<<<<<<< HEAD
  return { data, isPending, isError };
=======
  return {data, isPending,isError};
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
}
