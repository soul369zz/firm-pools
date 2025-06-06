"use client"

import { Star } from "lucide-react"

interface TrustBadgeProps {
  showOnlyInHero?: boolean
}

export function TrustBadge({ showOnlyInHero = false }: TrustBadgeProps) {
  if (showOnlyInHero) {
    return (
      <div className="absolute bottom-6 right-6 z-40 animate-in slide-in-from-bottom-2 duration-1000">
        <div className="bg-black/70 backdrop-blur-sm text-white px-6 py-4 rounded-2xl shadow-lg border border-white/10">
          <div className="flex items-center justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm font-medium text-center whitespace-nowrap text-white">Trusted by 200+ clients</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in slide-in-from-bottom-2 duration-1000">
      <div className="bg-black/70 backdrop-blur-sm text-white px-6 py-4 rounded-2xl shadow-lg border border-white/10">
        <div className="flex items-center justify-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm font-medium text-center whitespace-nowrap text-white">Trusted by 200+ clients</p>
      </div>
    </div>
  )
}
