import React from 'react'
import Link from 'next/link'
const CallToAction = () => {
  return (
    <div className='mx-2'>
    <section className='max-container flex flex-wrap flex-row justify-around bg-[#141c3a] text-white items-center rounded-3xl px-5 py-20 gap-5 mb-[-110px] relative'>
      <h3 className='heading2'>Projekt starten</h3>
      <p className='paragraph max-w-[500px] text-center'>Interessiert an einer Zusammenarbeit? Sollen wir einen Termin vereinbaren, um uns näher kennenzulernen?</p>
      <Link href="/contact" className='button-dark'>Jetzt mit dem Projekt starten</Link>
    </section>
    </div>
  )
}

export default CallToAction