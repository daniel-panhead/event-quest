export const colorOptions = [
  'bg-yellow-600',
  'bg-purple-600',
  'bg-teal-600',
  'bg-blue-600',
  'bg-red-600',
];

export const dateToString = (date: Date) => {
  return (
    date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
  );
};