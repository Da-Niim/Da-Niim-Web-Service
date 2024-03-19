"use client"

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full z-10 overflow-auto">
      <img
        src="/assets/images/loadingImage_2.png"
        alt="air"
        className="relative left-[-16%] bottom-[6%] z-50 animate-flyAir"
      />
      <img
        src="/assets/images/loadingImage_1.png"
        alt="point"
        className="absolute left-[44%] bottom-[45%] opacity-70	z-1 w-[15vw]"
      />
    </div>
  )
}

export default Loading
