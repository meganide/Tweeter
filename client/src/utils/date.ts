function convertToLocaleTimezone(dateCreatedAt: string) {
  const date = new Date(dateCreatedAt);
  const options = { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone };
  const localDate = date.toLocaleString('default', options);
  return localDate;
}

export { convertToLocaleTimezone };
