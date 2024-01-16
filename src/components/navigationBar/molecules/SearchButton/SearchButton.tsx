import Image from "next/image"
import React from "react"

const SearchButton = () => {
  return (
    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
      <Image
        className="h-4 w-4 fill-current"
        src={"/assets/images/navigation/search.png"}
        width={24}
        height={24}
        priority={false}
        alt="search"
      />
    </button>
  )
}

export default SearchButton
