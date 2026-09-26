import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [['Buy', '/properties'], ['Rent', '/properties?status=Rent'], ['Sell', '/list-property'], ['Agents', '/agents'], ['About', '/#about']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur-md">
    <div className="container-shell flex h-[76px] items-center justify-between">
      <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}><span className="grid h-8 w-8 place-items-center bg-ink text-[10px] font-bold text-cream">N</span><span className="text-[15px] font-bold tracking-[.28em]">NESTORA</span></Link>
      <nav className="hidden items-center gap-8 md:flex">{links.map(([label, to]) => <NavLink key={label} to={to} className={({ isActive }) => `text-[13px] transition-colors hover:text-bronze ${isActive ? 'text-bronze' : 'text-ink/70'}`}>{label}</NavLink>)}</nav>
      <div className="hidden items-center gap-5 md:flex"><Link to="/contact" className="text-[13px] text-ink/70 hover:text-bronze">Sign In</Link><Link to="/list-property" className="group flex items-center gap-2 bg-ink px-5 py-3 text-[12px] font-bold uppercase tracking-[.12em] text-cream transition hover:bg-bronze">List Property <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></div>
      <button aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center md:hidden">{open ? <X size={21} /> : <Menu size={21} />}</button>
    </div>
    {open && <div className="border-t border-ink/10 bg-cream px-6 py-6 md:hidden"><nav className="grid gap-5">{links.map(([label, to]) => <Link key={label} onClick={() => setOpen(false)} to={to} className="text-sm">{label}</Link>)}<Link onClick={() => setOpen(false)} to="/list-property" className="bg-ink px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-cream">List Property</Link></nav></div>}
  </header>
}
