import React, { useEffect, useRef } from "react"
import Typed from "typed.js"

export default function TypingText({ strings }) {
  const el = useRef(null)
  const typed = useRef(null)

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings,
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    })

    return () => {
      typed.current.destroy()
    }
  }, [strings])

  return (
    <div className="text-xl font-mono">
      <span ref={el} />
    </div>
  )
}
