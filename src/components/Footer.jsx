import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="py-8 mt-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-4">
          <a href="https://github.com/anonymous545-taken" target="_blank" rel="noreferrer" className="hover:text-primary"><FaGithub size={22} /></a>
          <a href="https://www.linkedin.com/in/briadon-fielies-4b9b8a303/" target="_blank" rel="noreferrer" className="hover:text-primary"><FaLinkedin size={22} /></a>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} Briadon Fielies. All rights reserved.</div>
      </div>
    </footer>
  )
}
