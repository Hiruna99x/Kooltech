"use client"

import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState<null | 'ok' | 'err'>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // demo-only behavior: fake submit
    setSubmitting(true)
    setSent(null)
    setTimeout(() => {
      setSubmitting(false)
      setSent('ok')
    }, 600)
  }

  return (
    <div className="card p-6">
      <form className="grid gap-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm text-kool-mut mb-1">Name</label>
          <input
            className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-kool-accent"
            placeholder="Your name"
            name="name"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-kool-mut mb-1">Email</label>
          <input
            type="email"
            className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-kool-accent"
            placeholder="you@example.com"
            name="email"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-kool-mut mb-1">Message</label>
          <textarea
            rows={4}
            className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-kool-accent"
            placeholder="How can we help?"
            name="message"
            required
          />
        </div>
        <button className="btn-primary w-fit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send Message'}
        </button>
        {sent === 'ok' && (
          <p className="text-sm text-emerald-400">Thanks! Your message has been captured (demo).</p>
        )}
      </form>
    </div>
  )
}
