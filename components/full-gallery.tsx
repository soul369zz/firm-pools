"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const galleryImages = [
  "IMG_6904_Medium.jpeg",
  "IMG_6772_Medium.jpeg",
  "84cc49ef-95d8-4d86-af57-2045fb57499c_Medium.jpeg",
  "bcfaf5d0-eb44-432e-b2f2-3de41fad68b0_Medium.jpeg",
  "63367c72-6a50-43a2-9d70-be7137bb0756_Medium.jpeg",
  "bde183fd-20fe-432b-ab30-5c3e9eff3851_Medium.jpeg",
  "IMG_6832_Medium.jpeg",
  "62ddd08f-3d55-45a4-848d-71eade0c7bb2.jpg",
  "982dc9bd-da2d-46f4-81f1-222f319a42fd.jpg",
  "IMG_2339.jpeg",
  "IMG_2355.jpeg",
  "IMG_8192.jpeg",
  "IMG_1913.jpeg",
  "IMG_1878.jpeg",
  "IMG_0815.jpeg",
  "IMG_0820.jpeg",
  "IMG_8193.jpeg",
  "IMG_0282.jpeg",
  "IMG_0285.jpeg",
  "IMG_0299.jpeg",
  "IMG_0302.jpeg",
  "IMG_0317.jpeg",
  "IMG_1557.jpeg",
  "IMG_1741.jpeg",
  "IMG_1824.jpeg",
  "IMG_2337.jpeg",
  "IMG_0677.jpeg"
]

interface FullGalleryProps {
  isOpen: boolean
  onClose: () => void
}

export function FullGallery({ isOpen, onClose }: FullGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isButtonExpanded, setIsButtonExpanded] = useState(false)
  const [copiedText, setCopiedText] = useState("")

  const handleButtonClick = () => {
    // Check if mobile device
    if (window.innerWidth <= 768) {
      // Mobile: direct call
      window.location.href = "tel:+14169061960"
    } else {
      // Desktop: expand button
      setIsButtonExpanded(!isButtonExpanded)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      setTimeout(() => setCopiedText(""), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  if (!isOpen) return null

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 h-full overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Our Work Gallery</h2>
            <p className="text-gray-300">Browse our collection of completed projects</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Gallery Grid - Horizontal scrolling layout similar to testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} animation="fadeInUp" delay={index * 50}>
              <div 
                className="relative group overflow-hidden rounded-lg aspect-square luxury-hover cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={`/gallery/work-gallery/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover image-hover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/25 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    View
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Show more info */}
        <ScrollReveal animation="fadeInUp" delay={400}>
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Showcasing {galleryImages.length} completed projects across the GTA
            </p>
            <Button 
              className={`btn-luxury transition-all duration-300 relative overflow-hidden ${
                isButtonExpanded ? 'bg-luxury-gold text-white px-6' : ''
              }`}
              onClick={handleButtonClick}
              style={{
                width: isButtonExpanded ? 'auto' : undefined,
                minWidth: isButtonExpanded ? '200px' : undefined
              }}
            >
              <div className={`transition-all duration-300 ${isButtonExpanded ? 'hidden' : 'block'}`}>
                Get Your Free Quote
              </div>
              <div className={`transition-all duration-300 ${isButtonExpanded ? 'flex items-center gap-2' : 'hidden'}`}>
                <span className="text-sm">+1(416) 906-1960</span>
                <div
                  className="cursor-pointer hover:bg-white hover:text-luxury-gold rounded-full p-1 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    copyToClipboard("+1(416) 906-1960")
                  }}
                  title="Copy number"
                >
                  <Copy size={16} />
                </div>
                {copiedText === "+1(416) 906-1960" && (
                  <span className="text-xs text-white/80 ml-1">Copied!</span>
                )}
              </div>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox for full-size viewing */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:bg-white/10 z-70"
          >
            <X className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="relative max-w-5xl max-h-5xl w-full h-full p-8">
            <Image
              src={`/gallery/work-gallery/${galleryImages[selectedImage]}`}
              alt={`Gallery image ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="text-sm opacity-75">
              {selectedImage + 1} of {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 