import React from "react"

function SubTab({
  activeSubTab,
  handleSubTabClick,
  tabNames,
}: {
  activeSubTab: string
  handleSubTabClick: (subTab: string) => void
  tabNames: string[]
}) {
  return (
    <div className="flex mt-4">
      {tabNames.map((subTab) => (
        <div
          key={subTab}
          className={`flex justify-center w-28 subtab ${
            activeSubTab === subTab
              ? "text-[#f7f8fa] font-bold bg-[#dc9435] rounded-lg"
              : "text-gray-400 bg-[#f2f3f6] rounded-lg"
          }`}
          onClick={() => handleSubTabClick(subTab)}
        >
          {subTab}
        </div>
      ))}
    </div>
  )
}

export default SubTab
