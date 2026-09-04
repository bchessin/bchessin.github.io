export type Session = {
  weekday: string;
  date: string;
  month: string;
  fullDate: string;
  time: string;
  format: string;
  location: string;
  kind: string;
  status: string;
};

type WeeklyClass = {
  day: number;
  weekday: string;
  kind: string;
  time: string;
  format: string;
  location: string;
};

export const instructor = {
  name: 'Bradford Chessin',
  title: 'Certified Group Fitness Instructor',
  email: 'chessinb@gmail.com',
};

export const weeklySchedule: WeeklyClass[] = [
  { day: 1, weekday: 'Monday', kind: 'F45 HIIT', time: '6:10–6:55 PM ET', format: 'In person', location: 'F45 Training' },
  { day: 2, weekday: 'Tuesday', kind: 'Zumba', time: '6:10–7:10 PM ET', format: 'Online', location: 'Google Meet' },
  { day: 3, weekday: 'Wednesday', kind: 'F45 HIIT', time: '6:10–6:55 PM ET', format: 'In person', location: 'F45 Training' },
  { day: 4, weekday: 'Thursday', kind: 'Zumba', time: '6:10–7:10 PM ET', format: 'Online', location: 'Google Meet' },
  { day: 5, weekday: 'Friday', kind: 'F45 HIIT', time: '6:10–6:55 PM ET', format: 'In person', location: 'F45 Training' },
];

const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function easternNow(date: Date) {
  const values = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date).map(({ type, value }) => [type, value]));

  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
    hour: Number(values.hour),
    minute: Number(values.minute),
  };
}

export function getUpcomingSessions(referenceDate: Date = new Date(), count = 15): Session[] {
  const eastern = easternNow(referenceDate);
  const easternDate = new Date(Date.UTC(eastern.year, eastern.month - 1, eastern.day));
  const currentMinutes = eastern.hour * 60 + eastern.minute;
  const sessions: Session[] = [];

  for (let offset = 0; offset < 21 && sessions.length < count; offset += 1) {
    const date = new Date(easternDate.getTime() + (offset * 24 * 60 * 60 * 1000));
    const day = date.getUTCDay();
    const classOnDay = weeklySchedule.find((item) => item.day === day);
    if (!classOnDay || (offset === 0 && currentMinutes >= 18 * 60 + 10)) continue;

    sessions.push({
      weekday: classOnDay.weekday || weekdayNames[day],
      date: String(date.getUTCDate()).padStart(2, '0'),
      month: monthNames[date.getUTCMonth()],
      fullDate: new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(date),
      time: classOnDay.time,
      format: classOnDay.format,
      location: classOnDay.location,
      kind: classOnDay.kind,
      status: 'Open',
    });
  }

  return sessions;
}

export const classOfferings = [
  { number: '01', title: 'Zumba', eyebrow: 'Rhythm + cardio', description: 'A high-energy dance workout that keeps the room moving. Expect simple choreography, big music, and an hour that feels more like a party than a workout.', details: ['60 minutes', 'Group class', 'Online · Google Meet'], availability: 'Tuesdays + Thursdays · 6:10 PM ET', color: 'lime' },
  { number: '02', title: 'HIIT', eyebrow: 'Power + pace', description: 'Short, focused intervals that build conditioning without losing the fun. Work at your level with clear coaching, intentional recovery, and a strong finish.', details: ['45 minutes', 'Group class', 'In person · F45'], availability: 'Mon + Wed + Fri · 6:10 PM ET', color: 'coral' },
  { number: '03', title: 'Strength & Conditioning', eyebrow: 'Control + capacity', description: 'A smart mix of strength work, mobility, and athletic conditioning designed to help you move better and feel more capable in everyday life.', details: ['50 minutes', 'Small group', 'In person by appointment'], availability: 'Schedule by request', color: 'blue' },
  { number: '04', title: 'Private Training', eyebrow: 'Personal + precise', description: 'One-on-one coaching shaped around your goals, experience, and schedule. We will build a plan that is challenging, approachable, and easy to keep showing up for.', details: ['60 minutes', '1:1 coaching', 'By appointment'], availability: 'Limited weekly spots', color: 'yellow' },
];

export const mailto = (subject: string) => `mailto:${instructor.email}?subject=${encodeURIComponent(subject)}`;
