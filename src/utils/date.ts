import dayjs from "dayjs";
import relative from "dayjs/plugin/relativeTime";

dayjs.extend(relative);

export const getRelativeDate = (date: Date) => {
  const newDate = dayjs(date);
  return newDate.fromNow();
};

export const getFormatDate = (date: Date) => {
  const newDate = dayjs(date);
  return newDate.format("MMM/DD/YYYY");
};
