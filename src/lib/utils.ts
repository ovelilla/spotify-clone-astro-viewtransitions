export const formatTime = (time: number): string => {
  if (time == null) return `0:00`;

  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
