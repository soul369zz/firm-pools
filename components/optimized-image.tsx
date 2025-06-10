'use client'

import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fill = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  // Simple wrapper around Next.js Image component without complex loading states
  const imageProps = {
    src,
    alt,
    className,
    priority,
    quality,
    sizes,
    placeholder,
    blurDataURL,
    ...props
  }

  if (fill) {
    return <Image {...imageProps} fill />
  }

  return (
    <Image
      {...imageProps}
      width={width}
      height={height}
    />
  )
} 