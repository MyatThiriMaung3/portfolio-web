export function calculateDuration(startDate: string, endDate?: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} month${months !== 1 ? 's' : ''}`);

  return parts.length ? parts.join(' ') : 'Less than a month';
}

export function formatMonthYear(dateStr: string): string {
  const date = new Date(dateStr);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${month}/${date.getFullYear()}`;
}

export function formatDateRange(startDate: string, endDate?: string | null): string {
  const startLabel = formatMonthYear(startDate);
  const endLabel = endDate ? formatMonthYear(endDate) : 'Present';
  return `${startLabel} - ${endLabel} (${calculateDuration(startDate, endDate)})`;
}