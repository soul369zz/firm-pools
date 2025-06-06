"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const galleryImages = [
  "IMG_6683.jpeg",
  "IMG_6684.jpeg",
  "IMG_0815.jpeg",
  "IMG_0820.jpeg",
  "IMG_1196.jpeg",
  "IMG_8193.jpeg",
  "IMG_0119.jpeg",
  "IMG_0282.jpeg",
  "IMG_0285.jpeg",
  "IMG_0299.jpeg",
  "IMG_0302.jpeg",
  "IMG_0317.jpeg",
  "IMG_1557.jpeg",
  "IMG_1679.jpeg",
  "IMG_1741.jpeg",
  "IMG_1824.jpeg",
  "IMG_2337.jpeg",
  "IMG_0677.jpeg",
  "62ddd08f-3d55-45a4-848d-71eade0c7bb2.JPG",
  "982dc9bd-da2d-46f4-81f1-222f319a42fd.JPG",
  "2f3395c9-6623-4f02-8596-d01bd4fc3500.JPG",
  "d51dd0bd-f0f2-48c3-a97f-6663923f0e39.JPG"
]

interface FullGalleryProps {
  isOpen: boolean
  onClose: () => void
}

export function FullGallery({ isOpen, onClose }: FullGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
                  src={`/gallery/view full/${image}`}
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
            <a href="tel:+14167172750">
              <Button className="btn-luxury">
                Get Your Free Quote
              </Button>
            </a>
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
              src={`/gallery/view full/${galleryImages[selectedImage]}`}
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