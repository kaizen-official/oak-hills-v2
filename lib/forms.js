export async function submitEnquiry(payload) {
  const response = await fetch("/api/submit-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.error || "Failed to submit form");
  }
  return result;
}

export function buildPayload(formType, data, extraMessage) {
  const path = typeof window === "undefined" ? "/" : window.location.pathname;
  const note = extraMessage ? `${extraMessage} | ` : "";
  return {
    formType,
    name: data.name,
    email: data.email || "Not provided",
    phone: data.phone,
    service: data.intent || formType,
    subject: data.intent || "Oak Hills enquiry",
    message: `${note}${data.message || "No message"} | Source: ${path}`,
  };
}
