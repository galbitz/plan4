import { calendarDay, calendarWeek } from "@/models/calendarday";
import dayjs from "dayjs";

export function loadDay(day: string): calendarDay {
  const text = localStorage.getItem(day) || "";
  return { day: day, text: text };
}

export function loadWeek(firstDay: Date): calendarWeek {
  const ret: calendarWeek = [];
  const now = dayjs(firstDay);

  for (let i = 0; i < 7; i++) {
    const day = now.add(i, "day");
    const dayAsString = day.format("YYYY-MM-DD");
    ret.push(loadDay(dayAsString));
  }

  return ret;
}

export function saveDay(calendarDay: calendarDay): void {
  localStorage.setItem(calendarDay.day, calendarDay.text);
}

export function saveWeek(calendarWeek: calendarWeek): void {
  calendarWeek.forEach((day) => {
    saveDay(day);
  });
}
