import { ArrowLeft } from 'lucide-react'

const LIFE_OS_URL = 'https://life-os-delta-gray.vercel.app'

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#1f1f2e] bg-[#0a0a0f]/90 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 h-12 flex items-center gap-1">
        <a
          href={LIFE_OS_URL}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-300 border border-transparent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Life OS
        </a>
      </div>
    </nav>
  )
}
