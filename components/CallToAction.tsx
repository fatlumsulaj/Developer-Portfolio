import React from 'react'
import Link from 'next/link'
const CallToAction = () => {
  return (
    <section className='max-container flex flex-wrap flex-row justify-around bg-[#141c3a] text-white items-center rounded-3xl py-12 gap-5 mb-[-90px] relative'>
      <h3 className='heading2'>Projekt starten</h3>
      <p className='paragraph max-w-[500px] text-center'>Interessiert an einer Zusammenarbeit? Sollen wir einen Termin vereinbaren, um uns näher kennenzulernen? Ich lade Sie gerne auf einen Kaffee ein.</p>
      <Link href="/contact" className='button-dark'>Jetzt mit dem Projekt starten</Link>
    </section>
  )
}

export default CallToAction