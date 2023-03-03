type BaseMeeting = {
  id: string;
  title: string;
  timezone: string;
  earliest: number;
  latest: number;
};

export type Meeting =
  BaseMeeting & { type: 'dates', dates: string[] } |
  BaseMeeting & { type: 'days', days: number[] };

export type Respondent = {
  name: string;
  availability: number[];
  id: string;
};
