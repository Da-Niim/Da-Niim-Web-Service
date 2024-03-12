"use client"
import { ctm } from "@utils/styles"
import * as React from "react"
import { Tooltip as ReactTooltip } from "react-tooltip"
import MainKoreaSvg from "../atoms/MainKoreaSvg"
import { KOREA_ADMINISTRATIVE_DISTRICT_DATA } from "../constant"
import { SvgKoreaAdministrativeDistrictNameType } from "../utils/types"

export default function MainKoreaAdministrativeDistrictSvg({}: {}) {
  const [hoveredRegion, setHoveredRegion] = React.useState<SvgKoreaAdministrativeDistrictNameType | null>(null)

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
                className={ctm(`hover:shadow-lg hover:z-1 focus:outline-none `)}
                style={{ fill: hoveredRegion == path.name ? path.color : "" }}
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
        variant="light"
        content={`${hoveredRegion}`}
        border={"1px solid #2c2c2c"}
      />
    </>
  )
}
