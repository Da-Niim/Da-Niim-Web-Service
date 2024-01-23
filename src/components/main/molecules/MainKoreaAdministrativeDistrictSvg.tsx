"use client"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css"
import { KOREA_ADMINISTRATIVE_DISTRICT_DATA } from "../constant"
import MainKoreaSvg from "../atoms/MainKoreaSvg"
import { useState } from "react"
import { Tooltip as ReactTooltip } from "react-tooltip"
import { SvgKoreaAdministrativeDistrictNameType } from "../utils/types"

export default function MainKoreaAdministrativeDistrictSvg() {
  const [hoveredRegion, setHoveredRegion] = useState<SvgKoreaAdministrativeDistrictNameType | null>(null)

  const handleMouseEnter = (event: any, path: any) => {
    setHoveredRegion(path.name)
  }

  return (
    <>
      <MainKoreaSvg>
        {KOREA_ADMINISTRATIVE_DISTRICT_DATA.map((path, index) => {
          return (
            <g key={index}>
              <path
                // onMouseOver={onMouseHover}
                data-tooltip-id="location-tooltip"
                d={path.pathData}
                id={path.id}
                name={path.name}
                className={css`
                  &:hover {
                    fill: #d2b48c;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
                    z-index: -1;
                  }
                  &:focus {
                    outline: none;
                  }
                `}
                onMouseEnter={(e) => handleMouseEnter(e, path)}
              />
            </g>
          )
        })}
      </MainKoreaSvg>
      <ReactTooltip
        style={{
          marginTop: `${
            hoveredRegion === "경상북도" || hoveredRegion === "강원도" || hoveredRegion === "경기도"
              ? "10vh"
              : hoveredRegion === "전라북도" ||
                hoveredRegion === "전라남도" ||
                hoveredRegion === "경상남도" ||
                hoveredRegion === "충청남도" ||
                hoveredRegion === "충청북도"
              ? "5vh"
              : "0"
          }`,
        }}
        id="location-tooltip"
        place="top"
        variant="success"
        content={`${hoveredRegion}`}
        border={"1px solid #2c2c2c"}
      />
    </>
  )
}
