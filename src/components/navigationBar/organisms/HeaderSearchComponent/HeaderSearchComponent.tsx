import SearchButton from "@components/navigationBar/molecules/SearchButton"
import React from "react"

const HeaderSearchComponent = () => {
  return (
    <div className="pt-2 relative mx-auto text-[#2C2C2E]">
      <input
        className="w-[24rem] border border-[#CECECE] rounded-[1.25rem] bg-white h-10 px-5 pr-16 text-sm focus:border-[#2C2C2E] focus:outline-none"
        name="search"
        placeholder="Search"
      />
      <SearchButton />
    </div>
  )
}

export default HeaderSearchComponent
