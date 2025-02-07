import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Generate emoji indicators for "Minutes to Read"
  const minutesToRead = minutes < 30
    ? "☕️".repeat(Math.ceil(minutes / 5))  // 1 ☕️ per 5 min
    : "🍱".repeat(Math.ceil(minutes / 10)); // 1 🍱 per 10 min

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {minutesToRead} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
