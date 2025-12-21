<<<<<<< HEAD
import { loginApi } from "@/apis/login/loginApi";
import {
  ICheckLoggedInType,
  IFailedCheckLoggedInType,
} from "@/types/login/loginDataType";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useCheckLoggedIn() {
  const queryClient = useQueryClient();
  const { data, isPending, isError } = useQuery<
    ICheckLoggedInType | IFailedCheckLoggedInType
  >({
    queryKey: ["loggedIn"],
    queryFn: async () => {
      const res = await loginApi.check();
      if (!("userId" in res)) {
        return res as IFailedCheckLoggedInType;
      }
      return res as ICheckLoggedInType;
    },
    retry: false,
  });

  const refreshUserCheck = () => {
    queryClient.invalidateQueries({ queryKey: ["loggedIn"] });
  };
  const resetUserCheck = () => {
    queryClient.removeQueries({ queryKey: ["loggedIn"] });
  };
  const checkIsOwner = (targetId: number | string) => {
    return (
      !!targetId &&
      data &&
      "userId" in data &&
      Number(data.userId) === Number(targetId)
    );
  };

  return {
    data,
    isPending,
    isError,
    refreshUserCheck,
    resetUserCheck,
    checkIsOwner,
  };
=======
import {loginApi} from "@/apis/login/loginApi";
import {useQuery, useQueryClient} from "@tanstack/react-query";

const ACCESS_TOKEN_EXPIRE_TIME = 10 * 60 * 1000;

export default function useCheckLoggedIn() {
  const queryClient = useQueryClient();
  const {data, isPending, isError} = useQuery({
    queryKey: ["loggedIn"],
    queryFn: () => loginApi.check(),
    staleTime: ACCESS_TOKEN_EXPIRE_TIME - 30_000,
    refetchInterval: ACCESS_TOKEN_EXPIRE_TIME - 30_000,
    retry: false,
  });
  const refreshUserCheck = () => {
    queryClient.invalidateQueries({queryKey: ["loggedIn"]});
  };
  const resetUserCheck = () => {
    queryClient.removeQueries({queryKey: ["loggedIn"]});
  };
  return {data, isPending, isError, refreshUserCheck, resetUserCheck};
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
}
