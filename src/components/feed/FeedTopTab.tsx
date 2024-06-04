import React from "react"

function Tab({ active, onClick, name }: { active: boolean; onClick: () => void; name: string }) {
  return (
    <div
      className={`flex justify-center w-32 text-lg tab ${active ? "text-black font-bold" : "text-gray-400"}`}
      onClick={onClick}
    >
      {name}
    </div>
  )
}

export default Tab
