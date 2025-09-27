import type { Todo } from "../types/todo";

export const dummyData: Todo[] = [
  { id: 1, title: "Fix bugs in authentication flow", completed: false },
  { id: 2, title: "Implement dark mode toggle", completed: false },
  {
    id: 3,
    title: "Refactor `useTodos` hook for reusability",
    completed: false,
  },
  {
    id: 4,
    title: "Write unit tests for `TodoList` component",
    completed: false,
  },
  {
    id: 5,
    title: "Optimize bundle size with code splitting",
    completed: false,
  },
  { id: 6, title: "Configure ESLint and Prettier", completed: false },
  { id: 7, title: "Set up CI with GitHub Actions", completed: false },
  { id: 8, title: "Document API integration in README", completed: false },
];
