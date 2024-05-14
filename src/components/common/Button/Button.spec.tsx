import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Button from "./Button"

describe("<Button/>", () => {
  const onClickFn = jest.fn()

  it("버튼안에 텍스트를 입력하면 텍스트와 함께 렌더링 된다.", () => {
    const buttonComponent = render(<Button>Test</Button>)
    expect(buttonComponent.getByText("Test")).toBeInTheDocument()
  })
  it("버튼을 클릭하면 onClick 함수가 실행된다.", () => {
    const buttonComponent = render(<Button onClick={onClickFn}>Test</Button>)
    buttonComponent.getByText("Test").click()
    expect(onClickFn).toHaveBeenCalled()
    expect(onClickFn).toHaveBeenCalledTimes(1)
  })
  it("버튼을 비활성화하면 disabled 속성이 추가된다.", () => {
    const buttonComponent = render(<Button disabled>Test</Button>)
    expect(buttonComponent.getByText("Test")).toBeDisabled()
  })
  it("버튼에 className을 추가하면 해당 클래스가 추가된다.", () => {
    const buttonComponent = render(<Button className="test-class">Test</Button>)
    expect(buttonComponent.getByText("Test")).toHaveClass("test-class")
  })
  it("버튼에 type을 추가하면 해당 type이 추가된다.", () => {
    const buttonComponent = render(<Button type="submit">Test</Button>)
    expect(buttonComponent.getByText("Test")).toHaveAttribute("type", "submit")
  })
})
