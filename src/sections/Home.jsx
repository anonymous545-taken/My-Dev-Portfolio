import React, { useEffect, useRef } from 'react'
import TypingText from '../components/TypingText'

const skills = [
  'Pentesting',
  'Cyber Security',
  'Python',
  'HTML',
  'Web Design',
  'Ethical Hacking',
  'CSS',
  'Kali Linux',
  'C#',
  'React JS',
  'Ruby',
  'Git'
]

export default function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Match canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const letters = '01'
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = Array(Math.floor(columns)).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff00' // bright green
      ctx.font = `${fontSize}px monospace`

      drops.forEach((y, index) => {
        const text = letters[Math.floor(Math.random() * letters.length)]
        ctx.fillText(text, index * fontSize, y * fontSize)

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0
        }
        drops[index]++
      })
    }

    const interval = setInterval(draw, 33)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-start pt-12 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
        Hi — I’m Briadon Fielies
      </h1>
      <p className="mb-6 max-w-2xl">
        High school student, passionate about coding and cyber security. Building secure, modern web solutions and learning every day.
      </p>
      <TypingText strings={skills} />

      {/* Matrix Effect Box */}
      <div className="mt-10 border-2 border-cyber-green rounded-lg shadow-lg overflow-hidden w-full max-w-lg h-64">
        <canvas ref={canvasRef} className="w-full h-full block"></canvas>
      </div>
    </div>
  )
}
