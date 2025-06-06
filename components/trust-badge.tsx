"use client"

import { Star } from "lucide-react"

interface TrustBadgeProps {
  showOnlyInHero?: boolean
}

export function TrustBadge({ showOnlyInHero = false }: TrustBadgeProps) {
  if (showOnlyInHero) {
    return (
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-40 animate-in slide-in-from-bottom-2 duration-1000">
        <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg border border-white/10">
          <div className="flex items-center justify-center space-x-1 mb-1 md:mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-xs md:text-sm font-medium text-center whitespace-nowrap text-white">
            Trusted by 200+ clients
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 animate-in slide-in-from-bottom-2 duration-1000">
      <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg border border-white/10">
        <div className="flex items-center justify-center space-x-1 mb-1 md:mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-xs md:text-sm font-medium text-center whitespace-nowrap text-white">
          Trusted by 200+ clients
        </p>
      </div>
    </div>
  )
}
