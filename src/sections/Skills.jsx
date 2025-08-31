// src/sections/Skills.jsx
import React from 'react'

const skills = [
  { id: 1,  name: 'Pentesting',       icon: 'pentesting.gif' },
  { id: 2,  name: 'Cyber Security',   icon: 'cyber-security.gif' },
  { id: 3,  name: 'Python',           icon: 'python.gif' },
  { id: 4,  name: 'HTML',             icon: 'html.gif' },
  { id: 5,  name: 'Web Design',       icon: 'web-design.gif' },
  { id: 6,  name: 'Ethical Hacking',  icon: 'ethical-hacking.png' },
  { id: 7,  name: 'CSS',              icon: 'css.png' },
  { id: 8,  name: 'Kali Linux',       icon: 'kali.png' },
  { id: 9,  name: 'C#',               icon: 'csharp.png' },
  { id: 10, name: 'React JS',         icon: 'react.gif' },
  { id: 11, name: 'Ruby',             icon: 'ruby.png' },
  { id: 12, name: 'Git',              icon: 'git.gif' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-cyber-black dark:bg-cyber-blue text-white px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-cyber-green dark:text-cyber-lightBlue">
        Skills
      </h2>

      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
        {skills.map(({ id, name, icon }) => (
          <div
            key={id}
            className="bg-gray-900 dark:bg-gray-800 border border-cyber-green/40 rounded-lg p-4 flex flex-col items-center justify-center shadow-lg transition-transform duration-200 hover:scale-[1.03]"
          >
            <img
              src={new URL(`../assets/skills/${icon}`, import.meta.url).href}
              alt={name}
              className="w-12 h-12 sm:w-14 sm:h-14 mb-3 object-contain"
              loading="lazy"
            />
            <p className="text-xs sm:text-sm md:text-base font-semibold text-center">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
