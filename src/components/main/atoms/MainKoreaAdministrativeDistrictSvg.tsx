"use client"
import { css } from "@emotion/css"
import { koreaAdministrativeDistrictData } from "../constant"

export default function MainKoreaAdministrativeDistrictSvg() {
  const handleClick = (event: React.MouseEvent<SVGPathElement>) => {
    console.log(`Clicked path: ${event.currentTarget.getAttribute("name")}`)
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524 631" aria-label="Map of South Korea">
      {koreaAdministrativeDistrictData.map((path, index) => {
        return (
          <path
            key={index}
            d={path.pathData}
            id={path.id}
            name={path.name}
            onClick={handleClick}
            className={css`
              fill: 2c2c2c;
              stroke: blue;
              &:hover {
                fill: #ffffff;
              }
            `}
          />
        )
      })}
    </svg>
  )
}
