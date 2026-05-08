"use client"
import { useState, useRef, useEffect } from "react"
import { Play, XIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out"

interface HeroVideoProps {
  animationStyle?: AnimationStyle
  videoSrc: string
  thumbnailAlt?: string
  className?: string
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
}

const cn = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(Boolean).join(" ")
}

export function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("")
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const selectedAnimation = animationVariants[animationStyle]

  // Генерируем превью из видео при загрузке
  useEffect(() => {
    const video = document.createElement('video')
    video.src = videoSrc
    video.crossOrigin = "anonymous"
    video.currentTime = 1 // Берем кадр на 1 секунде
    
    video.addEventListener('loadeddata', () => {
      video.currentTime = 1
    })
    
    video.addEventListener('seeked', () => {
      const canvas = document.createElement('canvas')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d')
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height)
      const dataUrl = canvas.toDataURL('image/jpeg')
      setThumbnailUrl(dataUrl)
    })
    
    return () => {
      video.remove()
    }
  }, [videoSrc])

  const handlePlayVideo = () => {
    setIsVideoOpen(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 100)
  }

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsVideoOpen(false)
  }

  return (
    <div className={cn("relative", className)}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      
      <button
        type="button"
        aria-label="Play video"
        className="group relative cursor-pointer border-0 bg-transparent p-0 w-full"
        onClick={handlePlayVideo}
      >
        {/* Превью из видео или градиент-заглушка */}
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={thumbnailAlt}
            className="w-full h-80 object-cover rounded-xl border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
          />
        ) : (
          <div className="w-full h-80 rounded-xl border shadow-lg bg-gradient-to-br from-[#633e05] to-[#f59f0d] flex items-center justify-center">
            <span className="text-white font-pixel text-sm">Загрузка превью...</span>
          </div>
        )}
        
        <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
          <div className="bg-black/50 flex size-28 items-center justify-center rounded-full backdrop-blur-md">
            <div className="relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-[#f59f0d]/30 to-[#f59f0d] shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
              <Play
                className="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                style={{
                  filter:
                    "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </button>
      
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                handleCloseVideo()
              }
            }}
            onClick={handleCloseVideo}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative mx-4 w-full max-w-5xl md:mx-0"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                onClick={handleCloseVideo}
                className="absolute -top-12 right-0 rounded-full bg-black/50 p-2 text-white ring-1 backdrop-blur-md hover:bg-black/70 transition-colors z-10"
              >
                <XIcon className="size-5" />
              </motion.button>
              
              <div className="relative isolate z-1 size-full overflow-hidden rounded-2xl bg-black">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full max-h-[80vh] object-contain"
                  controls
                  autoPlay
                  onPlay={() => {}}
                  onPause={() => {}}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}