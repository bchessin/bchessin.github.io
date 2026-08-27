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

export const instructor = {
  name: 'Bradford Chessin',
  title: 'Certified Group Fitness Instructor',
  email: 'chessinb@gmail.com',
};

export const sessions: Session[] = [
  { weekday: 'Thursday', date: '27', month: 'AUG', fullDate: 'Thursday, August 27, 2026', time: '6:30–7:30 PM ET', format: 'In person', location: 'F45 Training', kind: 'Zumba', status: 'Open' },
  { weekday: 'Thursday', date: '03', month: 'SEP', fullDate: 'Thursday, September 3, 2026', time: '6:30–7:30 PM ET', format: 'In person', location: 'F45 Training', kind: 'Zumba', status: 'Open' },
  { weekday: 'Thursday', date: '10', month: 'SEP', fullDate: 'Thursday, September 10, 2026', time: '6:30–7:30 PM ET', format: 'Online', location: 'Google Meet', kind: 'Zumba', status: 'Open' },
  { weekday: 'Thursday', date: '17', month: 'SEP', fullDate: 'Thursday, September 17, 2026', time: '6:30–7:30 PM ET', format: 'In person', location: 'F45 Training', kind: 'Zumba', status: 'Open' },
  { weekday: 'Thursday', date: '24', month: 'SEP', fullDate: 'Thursday, September 24, 2026', time: '6:30–7:30 PM ET', format: 'Online', location: 'Google Meet', kind: 'Zumba', status: 'Open' },
  { weekday: 'Thursday', date: '01', month: 'OCT', fullDate: 'Thursday, October 1, 2026', time: '6:30–7:30 PM ET', format: 'In person', location: 'F45 Training', kind: 'Zumba', status: 'Open' },
  { weekday: 'Thursday', date: '08', month: 'OCT', fullDate: 'Thursday, October 8, 2026', time: '6:30–7:30 PM ET', format: 'Online', location: 'Google Meet', kind: 'Zumba', status: 'Open' },
  { weekday: 'Thursday', date: '15', month: 'OCT', fullDate: 'Thursday, October 15, 2026', time: '6:30–7:30 PM ET', format: 'In person', location: 'F45 Training', kind: 'Zumba', status: 'Open' },
];

export const classOfferings = [
  { number: '01', title: 'Zumba', eyebrow: 'Rhythm + cardio', description: 'A high-energy dance workout that keeps the room moving. Expect simple choreography, big music, and an hour that feels more like a party than a workout.', details: ['60 minutes', 'Group class', 'F45 or Google Meet'], availability: 'Thursdays · 6:30 PM ET', color: 'lime' },
  { number: '02', title: 'HIIT', eyebrow: 'Power + pace', description: 'Short, focused intervals that build conditioning without losing the fun. Work at your level with clear coaching, intentional recovery, and a strong finish.', details: ['45 minutes', 'Group class', 'F45 or Google Meet'], availability: 'Schedule by request', color: 'coral' },
  { number: '03', title: 'Strength & Conditioning', eyebrow: 'Control + capacity', description: 'A smart mix of strength work, mobility, and athletic conditioning designed to help you move better and feel more capable in everyday life.', details: ['50 minutes', 'Small group', 'F45 Training'], availability: 'Schedule by request', color: 'blue' },
  { number: '04', title: 'Private Training', eyebrow: 'Personal + precise', description: 'One-on-one coaching shaped around your goals, experience, and schedule. We will build a plan that is challenging, approachable, and easy to keep showing up for.', details: ['60 minutes', '1:1 coaching', 'In person or online'], availability: 'Limited weekly spots', color: 'yellow' },
];

export const mailto = (subject: string) => `mailto:${instructor.email}?subject=${encodeURIComponent(subject)}`;
