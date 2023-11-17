"use client"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css"
import { koreaAdministrativeDistrictData } from "../constant"
import MainKoreaSvg from "../atoms/MainKoreaSvg"

export default function MainKoreaAdministrativeDistrictSvg() {
  const handleClick = (event: React.MouseEvent<SVGPathElement>) => {
    console.log(`Clicked path: ${event.currentTarget.getAttribute("name")}`)
  }
  return (
    <MainKoreaSvg>
      {koreaAdministrativeDistrictData.map((path, index) => {
        return (
          <path
            key={index}
            d={path.pathData}
            id={path.id}
            name={path.name}
            onClick={handleClick}
            className={css`
              &:hover {
                fill: #d2b48c;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
              }
            `}
          />
        )
      })}
    </MainKoreaSvg>
  )
}
