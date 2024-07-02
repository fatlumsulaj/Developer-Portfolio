import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, 
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <section className="contact max-container contact_bg px-4 md:px-6 py-10 pb-20 mt-4 text-white">
      <div className="max-w-screen-normal mx-auto flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl text-black max-w-screen-xl md:text-3xl lg:text-4xl font-bold lg:leading-[48px]">Jetzt<span className="purple-text"> Kontakt</span> aufnehmen</h2>
          <p className='mt-4 text-[17px] text-neutral-900 max-w-xl'>Bereit für eine Veränderung in Ihrem Unternehmen? Ich sind hier, um Ihre Ideen Wirklichkeit werden zu lassen! Lassen Sie uns in einem unverbindlichen Gespräch darüber sprechen, wie wir gemeinsam etwas Großartiges erreichen können.</p>
          <div className='glass_contact_bg p-8 mt-10 w-full md:w-3/4 border border-solid border-neutral-400'>
            <div className="flex items-center gap-6">

              <div>
                <h3 className='font-bold text-white text-[17px]'>Fatlum Sulaj</h3>
                <p className='text-[15px]'>Webentwickler & SEO Expert</p>
              </div>
            </div>
            <p className='md:text-lg mt-6'>Um Ihnen optimal zu dienen, möchten ich Ihre Anforderungen kennenlernen. Erzählen Sie mir von Ihrem Projekt, und wir vereinbaren gerne einen kostenlosen Beratungstermin, um zu besprechen, wie ich Ihnen helfen kann.</p>
          </div>
        </div>
        <form className='w-full lg:w-2/5'   action="https://formspree.io/f/mwkgpbeg"
  method="POST">
          <div className="flex gap-2">
            <div className='w-1/2 mb-4'>
              <Input className='h-12 rounded-lg bg-transparent mt-2 text-black' name="Vorname" id="firstName" placeholder='Vorname' />
            </div>
            <div className='w-1/2 mb-4'>
              <Input className='h-12 rounded-lg bg-transparent mt-2 text-black' name="Nachname" id="lastName" placeholder='Nachname' />
            </div>
          </div>
          <div className='mt-4 mb-8'>
            <Input className='h-12 mt-2 rounded-lg bg-transparent text-black' name="Email" type="email" id="email" placeholder='Email Adresse' />
          </div>
          <div className='mt-4 mb-4'>
            <Input className='h-12 mt-2 mb-8 rounded-lg bg-transparent text-black' name="Handynummer" type="tel" id="phone" placeholder='Handynummer:' />
          </div>

          <div className="mt-4 mb-3">
            <Textarea rows={6} className='mt-2 rounded-lg bg-transparent text-black border-neutral-600' name="Nachricht" id="message" placeholder='Nachricht' />
          </div>
          <Button className='purple-background text-white text-md rounded-full mt-6 w-full'>Nachricht senden</Button>
        </form>
      </div>
    </section>
  )
}
