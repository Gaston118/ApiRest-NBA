import { useState, useEffect } from "react"

const images = [
    '/assets/backgrounds/home3.webp',
    '/assets/backgrounds/home1.webp',
    '/assets/backgrounds/nba7.webp',
    '/assets/backgrounds/nba5.webp',
    '/assets/backgrounds/nba6.webp',
]

const Slider = () => {

    const [currentImage, setCurrentImage ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() =>{
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-50' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold">NBA API</h1>
        <h2 className="text-white text-2xl underline">Get information about your favourite team or player</h2>
    </div>
    </div>
  )
}

export default Slider