export const WORK_SCHEDULES = [
  { start: "08:00", end: "16:00", label: "Morning" },
  { start: "16:00", end: "23:59", label: "Evening" },
  { start: "00:00", end: "08:00", label: "Night" },
];

export const DEFAULT_WORK_SCHEDULE = WORK_SCHEDULES[0];

export const TIMEZONE_EST = "America/New_York";

export const getRandomSchedule = () => WORK_SCHEDULES[Math.floor(Math.random() * WORK_SCHEDULES.length)];
