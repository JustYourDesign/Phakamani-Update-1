"use client";

import { useRef, useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendEnquiry } from "@/lib/forms";

const interests = [
  "Personal performance coaching",
  "Corporate / team programme",
  "School or youth programme",
  "Speaking or workshop",
  "Something else",
];

type Status = "idle" | "sending" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);

    const result = await sendEnquiry({
      name: String(data.name ?? ""),
      email: String(data.email ?? ""),
      organisation: String(data.organisation ?? ""),
      interest: String(data.interest ?? ""),
      message: String(data.message ?? ""),
      botcheck: String(data.company ?? ""),
    });

    if (!result.ok) {
      setStatus("error");
      setError(result.error);
      return;
    }

    form.reset();
    setStatus("idle");
    setSent(true);
  }

  const sending = status === "sending";

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6 rounded-card bg-wash p-8"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" placeholder="Jane Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jane@company.com"
              required
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="organisation">Organisation (optional)</Label>
            <Input id="organisation" name="organisation" placeholder="Company or school name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest">I&rsquo;m interested in</Label>
            <Select name="interest">
              <SelectTrigger id="interest" className="w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {interests.map((interest) => (
                  <SelectItem key={interest} value={interest}>
                    {interest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us a bit about your goals..."
            rows={5}
            required
          />
        </div>

        {/* Honeypot — hidden from people, catches most bots. */}
        <div aria-hidden className="hidden">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {error && (
          <p
            role="alert"
            className="flex items-start gap-2.5 rounded-xl bg-destructive/10 p-4 text-small text-destructive"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
            {error}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={sending}
          className="w-full sm:w-auto"
        >
          {sending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </form>

      <Dialog.Root open={sent} onOpenChange={setSent}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-[60] bg-black/70 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
          <Dialog.Popup className="fixed left-1/2 top-1/2 z-[60] w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-card bg-white p-9 text-center transition duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-7" aria-hidden />
            </span>
            <Dialog.Title className="mt-6 text-subheading font-semibold text-ink">
              Thank you for reaching out
            </Dialog.Title>
            <Dialog.Description className="mt-3 text-small text-muted-ink">
              Our admin will contact you soon.
            </Dialog.Description>
            <Dialog.Close
              render={<Button size="lg" className="mt-8 w-full" />}
            >
              Close
            </Dialog.Close>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
