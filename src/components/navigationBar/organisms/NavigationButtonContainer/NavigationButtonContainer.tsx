"use client"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css"
import NavigationIconButton from "@components/navigationBar/molecules/NavigationIconButton"
import { NavigationButtonType } from "@components/navigationBar/utils/type"

interface NavigationButtonContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonList: NavigationButtonType[]
  gap: string
}

export default function NavigationButtonContainer({ buttonList, gap, ...props }: NavigationButtonContainerProps) {
  return (
    <div
      className={css`
        display: flex;
        gap: ${gap};
      `}
    >
      {buttonList.map((buttonType, idx) => {
        return <NavigationIconButton key={idx} buttonType={buttonType} />
      })}
    </div>
  )
}
