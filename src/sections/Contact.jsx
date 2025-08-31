import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="pt-12 pb-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">Contact Me</h2>
      <form className="max-w-lg space-y-4">
        <input className="w-full p-3 rounded bg-gray-800 border border-gray-700" placeholder="Name" />
        <input className="w-full p-3 rounded bg-gray-800 border border-gray-700" placeholder="Surname" />
        <input className="w-full p-3 rounded bg-gray-800 border border-gray-700" placeholder="Email" />
        <button type="button" className="w-full py-3 rounded bg-primary text-black font-semibold">Send</button>
      </form>

      {/* Additional Send Button styled like "View More" */}
      <div className="max-w-lg mt-6">
        <button
          type="button"
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
