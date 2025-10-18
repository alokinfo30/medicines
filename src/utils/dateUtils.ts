export function formatDate(dateString: string): string {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(navigator.language).format(date);
  } catch (e) {
    console.error("Error formatting date:", e);
    return dateString;
  }
}