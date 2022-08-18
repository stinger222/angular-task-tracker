export interface ITask {
  id: number,
  text: string,
  day: Date | string,
  reminder: boolean
}

export const TASKS: Array<ITask> = [
  {
    id: 1,
    text: "Task №1",
    day: "May 5th at 2:30am",
    reminder: false
  },
  {
    id: 2,
    text: "Task №2",
    day: "May 5th at 2:30am",
    reminder: false
  },
  {
    id: 3,
    text: "Task №3",
    day: "May 5th at 2:30am",
    reminder: true
  },
  {
    id: 4,
    text: "Task №4",
    day: "May 5th at 2:30am",
    reminder: false
  },
  {
    id: 5,
    text: "Task №5",
    day: "May 5th at 2:30am",
    reminder: true
  }
]
