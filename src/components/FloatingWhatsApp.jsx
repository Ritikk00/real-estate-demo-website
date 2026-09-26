import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '13105550148'
const WHATSAPP_MESSAGE = "Hi, I'm interested in a property listed on Nestora. I'd like to know more about the available properties."

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Nestora on WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(32,37,34,.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-cream sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={23} strokeWidth={2.2} aria-hidden="true" />
      <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap bg-ink px-3 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        Chat with us
      </span>
    </a>
  )
}
