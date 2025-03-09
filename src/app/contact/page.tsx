"use client"

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real application, form submission logic would be implemented here.
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      {submitted ? (
        <p>Thank you for reaching out! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Name</label>
            <input type="text" id="name" name="name" required className="w-full border rounded p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input type="email" id="email" name="email" required className="w-full border rounded p-2" />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea id="message" name="message" required className="w-full border rounded p-2" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded">
            Submit
          </button>
        </form>
      )}
    </div>
  )
}