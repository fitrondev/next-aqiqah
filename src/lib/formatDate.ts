export function formatDate(
  date: Date | string,
  locale: string = "id-ID"
): string {
  const validDate = new Date(date);
  return validDate.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
