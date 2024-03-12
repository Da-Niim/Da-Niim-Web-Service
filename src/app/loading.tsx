"use client"

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <img
        src="/assets/images/loadingImage_2.png"
        alt="air"
        className="relative left-[-120px] bottom-[-1.25rem] z-50 animate-flyAir"
      />
      <img src="/assets/images/loadingImage_1.png" alt="point" className="absolute opacity-70	z-1 w-[10vw]" />
    </div>
  )
}

export default Loading
