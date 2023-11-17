/** @jsxImportSource @emotion/react */
"use client"
import { css } from "@emotion/react"

const Loading: React.FC = () => {
  const loadingContainerStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `

  const flyAirAnimation = `
  @keyframes flyAir {
  0% {
    transform: rotate(0deg) translateX(-10px) translateY(-10px);
  }
  25% {
    transform: rotate(22.5deg) translateX(10px) translateY(-70px);
  }
  50% {
    transform: rotate(45deg) translateX(30px) translateY(-135px);
  }
  75% {
    transform: rotate(57.5deg) translateX(40px) translateY(-180px);
  }
  100% {
    transform: rotate(65deg) translateX(60px) translateY(-225px);
  }
}
  `

  const airImageStyles = css`
    animation: flyAir 2s linear infinite;
    position: relative;
    left: -120px;
    bottom: -20px;
    z-index: 999;
  `
  const pointStyles = css`
    position: absolute;
    opacity: 0.7;
    width: 10 vw;
    z-index: 1;
  `

  return (
    <div css={loadingContainerStyles}>
      <img src="/direct-flight 3.png" alt="air" css={airImageStyles} className="airImage" />
      <img src="/direct-flight 2.png" alt="point" css={pointStyles} className="pointImage" />

      <style>{flyAirAnimation}</style>
    </div>
  )
}

export default Loading
