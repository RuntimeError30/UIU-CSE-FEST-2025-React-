import React, { useRef, useState } from 'react'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setloadedVideos] = useState(0)
  

  const totalVideos = 3;
  const nextVidRef = useRef(null)

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMIniVidClick = () => {
    setHasClicked(true)
    setCurrentIndex(upcomingVideoIndex)
    
  }
  const handleVideoLoad = () => {
    setloadedVideos(prev => prev + 1)
  }


  
  
  const getVideoSource = (index) => `videos/hero-${index}.mp4`;


  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75' id='video-frame'>
        <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden  rounded-lg'>

          <div onClick={handleMIniVidClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>

            <video loop muted id='current-video'className='size-64 origin-center object-cover scale-150 object-center' onLoadedData={handleVideoLoad} ref={nextVidRef} src={getVideoSource(currentIndex + 1)} />
          </div>

        </div>

        <video
          ref={nextVidRef}
          src={getVideoSource(currentIndex)}
          loop
          muted
          id='next-video'
          className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
          onLoadedData={handleVideoLoad}
        />

        <video
          src={getVideoSource(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          className='absolute left-0 top-0 size-full object-cover object-center'
          onLoadedData={handleVideoLoad}
        />
      </div>
    </div>
  )
}

export default Hero