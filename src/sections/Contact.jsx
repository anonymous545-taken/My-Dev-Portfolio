import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false)
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSend = async () => {
    const name = document.querySelector('input[placeholder="Name"]').value
    const surname = document.querySelector('input[placeholder="Surname"]').value
    const email = document.querySelector('input[placeholder="Email"]').value

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    } else {
      setEmailError('')
    }

    const now = new Date()
    const timestamp = now.toLocaleString('en-ZA', {
      timeZone: 'Africa/Johannesburg',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    const content = [
      `📬 **New Contact Submission**`,
      `━━━━━━━━━━━━━━━━━━`,
      `👤 **Name:** ${name} ${surname}`,
      `📧 **Email:** ${email}`,
      `🕒 **Submitted on:** ${timestamp}`,
      `━━━━━━━━━━━━━━━━━━`,
    ].join('\n')

    try {
      await fetch('https://discord.com/api/webhooks/1411807773746004080/pDqxNL5Tu0tjykzs7NvaXok-9lV0IKCs9PeF8YavBG6JAD7mo3o0P5zXbwylJKq7BrAk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })

      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 3000)
    } catch (err) {
      console.error('Webhook failed:', err)
    }
  }

  return (
    <div className="pt-12 pb-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">Contact Me</h2>
      <form className="max-w-lg space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input className="w-full p-3 rounded bg-gray-800 border border-gray-700" placeholder="Name" />
        <input className="w-full p-3 rounded bg-gray-800 border border-gray-700" placeholder="Surname" />
        <input className="w-full p-3 rounded bg-gray-800 border border-gray-700" placeholder="Email" />
        {emailError && (
          <p className="text-red-500 text-sm font-medium">{emailError}</p>
        )}
        <button
          type="button"
          onClick={handleSend}
          className="w-full py-3 rounded bg-primary text-black font-semibold"
        >
          Send
        </button>
      </form>

      {showMessage && (
        <div className="mt-4 text-green-400 font-bold animate-pulse transition-opacity duration-300">
          ✅ Message Sent!
        </div>
      )}

      <div className="max-w-lg mt-6">
        <button
          type="button"
          onClick={handleSend}
          className="w-full py-3 px-6 bg-cyber-green text-black font-bold rounded-lg hover:bg-green-400 dark:hover:bg-cyber-lightBlue transition"
        >
          Send Message
        </button>
      </div>

      <div className="mt-8">
        <a
          className="inline-flex items-center gap-2"
          href="https://github.com/anonymous545-taken"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  )
}
