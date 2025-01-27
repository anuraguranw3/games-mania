
// function to format dates in yyyy-mm-dd format
export const formateDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// function to calculate "Last 30 days"
export const getLast30Days = () => {
  const today = new Date();
  const last30Days = new Date(today);
  last30Days.setDate(today.getDate() - 30);
  return `${formateDate(last30Days)},${formateDate(today)}`;
};

// function to calculate "This week" (sunday to saturday)
export const getThisWeek = () => {
  const today = new Date();
  const firstDayOfWeek = today.getDate() - today.getDay();  // sunday
  const lastDayOfWeek = firstDayOfWeek + 6;
  const startOfWeek = new Date(today.setDate(firstDayOfWeek));
  const endOfWeek = new Date(today.setDate(lastDayOfWeek));
  return `${formateDate(startOfWeek)},${formateDate(endOfWeek)}`;
};

// function to calculate "Next Week"
export const getNextWeek = () => {
  const today = new Date();
  const firstDayOfNextWeek = today.getDate() + (7 - today.getDay());
  const lastDayOfNextWeek = firstDayOfNextWeek + 6;
  const startOfNextWeek = new Date(today.setDate(firstDayOfNextWeek));
  const endOfNextWeek = new Date(today.setDate(lastDayOfNextWeek));
  return `${formateDate(startOfNextWeek)},${formateDate(endOfNextWeek)}`;
};