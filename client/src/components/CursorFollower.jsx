import React, { useEffect, useRef } from 'react'

export default function CursorFollower() {
  // Create a reference to the dot element
  const dotRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current // Access the dot div element
    let mouseX = 0, mouseY = 0 // Track mouse position
    let dotX = 0, dotY = 0     // Track dot's smooth position

    // Update mouse position when user moves the mouse
    function handleMouseMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Animation loop to smoothly move the dot towards the mouse
    function animate() {
      dotX += (mouseX - dotX) * 0.1
      dotY += (mouseY - dotY) * 0.1

      if (dot) {
        dot.style.transform = `translate(${dotX - 15}px, ${dotY - 18}px)`
      }

      requestAnimationFrame(animate) // Keep looping
    }

    // Start tracking mouse
    document.addEventListener('mousemove', handleMouseMove)
    animate() // Start animation

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Inline styles for the dot
  const dotStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    border: '0.5px dashed black', // Change color as needed
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: "#fff", // Change color as needed
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'background-color 0.3s ease'
  }

  return <div ref={dotRef} style={dotStyle}></div>
}
