import React, { useEffect, useState } from 'react'

export default function LoadingScreen({ onFinish }) {
  const [lines, setLines] = useState([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const script = [
      'Initializing system...',
      'Loading modules...',
      'Scanning network...',
      'Location found...'
    ]

    let typingInterval

    const typeNextChar = () => {
      const line = script[lineIndex]
      if (charIndex < line.length) {
        setCurrentLine(prev => prev + line[charIndex])
        setCharIndex(prev => prev + 1)
        playTypingSound()
      } else {
        setLines(prev => [...prev, line])
        setCurrentLine('')
        setCharIndex(0)
        setLineIndex(prev => prev + 1)
      }
    }

    if (lineIndex < script.length) {
      typingInterval = setInterval(typeNextChar, 50)
    } else {
      setIsTyping(false)
      setTimeout(() => onFinish(), 1200)
    }

    return () => clearInterval(typingInterval)
  }, [charIndex, lineIndex])

  const playTypingSound = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.type = 'square'
      oscillator.frequency.setValueAtTime(1000, ctx.currentTime)
      gainNode.gain.setValueAtTime(0.02, ctx.currentTime)

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.start()
      oscillator.stop(ctx.currentTime + 0.05)
    } catch (err) {
      console.warn('Typing sound failed:', err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400 font-mono p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-black border border-green-600 rounded-md shadow-lg">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-2 bg-green-900 text-green-300 text-sm rounded-t-md">
            <span className="mr-2 w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="mr-2 w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="mr-2 w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="ml-auto">kali@localhost:~</span>
          </div>

          {/* Terminal Output */}
          <div className="px-4 py-6">
            {lines.map((l, idx) => (
              <pre key={idx} className="whitespace-pre-wrap">{l}</pre>
            ))}
            {isTyping && (
              <pre className="whitespace-pre-wrap">
                {currentLine}
                <span className="animate-pulse">█</span>
              </pre>
            )}
            {!isTyping && (
              <pre className="mt-4 whitespace-pre-wrap">
                Access Granted <span className="animate-pulse">█</span>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
