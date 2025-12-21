type TReturnOS = "ios" | "android" | "mac" | "windows" | "unknown";
const getOS = (): TReturnOS => {
<<<<<<< HEAD
  if (typeof window === "undefined") return "unknown";
=======
  if (typeof navigator === "undefined") return "unknown";
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  if (/Macintosh/i.test(ua)) return "mac";
  if (/Windows/i.test(ua)) return "windows";
  return "unknown";
};
export default getOS;
