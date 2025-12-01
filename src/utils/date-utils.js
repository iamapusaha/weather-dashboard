export default function getFormattedDate(input) {
  // If input is in seconds (10 digits), convert to milliseconds
  const timestamp =
    input.toString().length === 10 ? Number(input) * 1000 : Number(input);

  const date = new Date(timestamp);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.getDate();

  const monthName = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear().toString().slice(-2); // last two digits

  return `${hours}:${minutes} - ${dayName}, ${day} ${monthName} ‘${year}`;
}
