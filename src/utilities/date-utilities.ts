import {format} from "date-fns";

export const formatDate = (date: Date) => {
  return format(date, "HH:mm dd-MM-yyyy").toLowerCase();
};
