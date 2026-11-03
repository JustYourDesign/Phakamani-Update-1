/**
 * Form delivery via Web3Forms.
 *
 * Submitted straight from the browser, not through a route handler: on the
 * free plan Web3Forms rejects server-to-server calls outright ("Use our API
 * in client side… Pro plan is required"). Their own snippet posts from the
 * page for the same reason.
 *
 * The access key is public by design — it sits in the HTML of every
 * Web3Forms integration — so committing it is expected, not a leak.
 * NEXT_PUBLIC_WEB3FORMS_KEY overrides it if the key is ever rotated.
 *
 * The recipient is configured on the Web3Forms account, not sent with the
 * request; that is how they prevent the endpoint being used as an open
 * relay. If mail stops arriving at admin@phakamani.io, check there first.
 */

const ENDPOINT = "https://api.web3forms.com/submit";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "bb8b184f-a9fb-4ed4-830e-45d101f79232";

export const CONTACT_ADDRESS = "admin@phakamani.io";

export type EnquiryInput = {
  name: string;
  email: string;
  organisation?: string;
  interest?: string;
  message: string;
  /** Honeypot; Web3Forms discards anything with this set. */
  botcheck?: string;
};

export type SubmitResult = { ok: true } | { ok: false; error: string };

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

async function post(fields: Record<string, unknown>): Promise<SubmitResult> {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: ACCESS_KEY, from_name: "Phakamani Website", ...fields }),
    });

    const body = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (!res.ok || !body.success) {
      return {
        ok: false,
        error: `We couldn't send that just now. Please email us directly at ${CONTACT_ADDRESS}.`,
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: `We couldn't reach our mail service. Please check your connection, or email us at ${CONTACT_ADDRESS}.`,
    };
  }
}

export async function sendEnquiry(input: EnquiryInput): Promise<SubmitResult> {
  if (input.botcheck) return { ok: true }; // silently drop bots
  if (!input.name.trim()) return { ok: false, error: "Please enter your name." };
  if (!isEmail(input.email.trim())) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const name = input.name.trim();
  const email = input.email.trim();

  return post({
    subject: `Website enquiry — ${name}${input.interest ? ` (${input.interest})` : ""}`,
    name,
    email,
    replyto: email,
    message: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${input.organisation?.trim() || "—"}`,
      `Interested in: ${input.interest?.trim() || "—"}`,
      "",
      input.message.trim() || "(no message)",
    ].join("\n"),
  });
}

export async function subscribeToNewsletter(email: string): Promise<SubmitResult> {
  const address = email.trim();
  if (!isEmail(address)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  return post({
    subject: `Newsletter signup — ${address}`,
    name: "Newsletter signup",
    email: address,
    replyto: address,
    message: `${address} asked to be added to the Phakamani mailing list.`,
  });
}
