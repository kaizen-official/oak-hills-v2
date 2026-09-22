"use client";

import { useState } from "react";
import { intents } from "@/lib/site";
import { buildPayload, submitEnquiry } from "@/lib/forms";
import Field from "./field";

const empty = { name: "", email: "", phone: "", intent: "enquiry", message: "", visitDate: "" };

export default function EnquiryForm({ defaultIntent = "enquiry", onSuccess, compact = false }) {
  const [data, setData] = useState({ ...empty, intent: defaultIntent });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const setField = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    const extra = data.intent === "visit" && data.visitDate ? `Preferred visit: ${data.visitDate}` : "";
    try {
      await submitEnquiry(buildPayload("cta", data, extra));
      setData({ ...empty, intent: defaultIntent });
      onSuccess?.();
    } catch (err) {
      setError(err.message || "The desk could not receive this form. Please call or try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Full name" name="name" value={data.name} onChange={setField} required />
      <Field label="Phone" name="phone" type="tel" value={data.phone} onChange={setField} required pattern="[0-9+\s-]{10,16}" />
      <Field label="Email" name="email" type="email" value={data.email} onChange={setField} />
      <IntentSelect value={data.intent} onChange={setField} />
      {data.intent === "visit" ? (
        <Field label="Preferred visit date" name="visitDate" type="date" value={data.visitDate} onChange={setField} />
      ) : null}
      {compact ? null : <MessageBox value={data.message} onChange={setField} />}
      {error ? <p className="text-sm text-red-800 bg-red-50 px-3 py-2">{error}</p> : null}
      <button
        type="submit"
        disabled={busy}
        title="Submit enquiry"
        className="w-full bg-oak-deep text-cream py-3 font-medium tracking-wide hover:bg-oak disabled:opacity-60"
      >
        {busy ? "Sending…" : "Send to the sales desk"}
      </button>
    </form>
  );
}

function IntentSelect({ value, onChange }) {
  return (
    <label className="block">
      <span className="block text-sm text-oak-deep mb-1">How should we help?</span>
      <select
        name="intent"
        value={value}
        onChange={onChange}
        title="Select enquiry type"
        className="w-full px-4 py-3 bg-white border border-oak/20 text-oak-deep outline-none focus:border-bronze"
      >
        {intents.map((item) => (
          <option key={item.id} value={item.id}>{item.label}</option>
        ))}
      </select>
    </label>
  );
}

function MessageBox({ value, onChange }) {
  return (
    <label className="block">
      <span className="block text-sm text-oak-deep mb-1">Message</span>
      <textarea
        name="message"
        rows={4}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white border border-oak/20 text-oak-deep outline-none focus:border-bronze"
        placeholder="Tell us if you are buying to live, to hold, or to visit first."
      />
    </label>
  );
}
