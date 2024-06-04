import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Input } from "./Input"

describe("<Input/>", () => {
  const onChangeFn = jest.fn()

  it("Input을 렌더링한다.", () => {
    const inputComponent = render(<Input />)
    expect(inputComponent.getByRole("textbox")).toBeInTheDocument()
  })

  it("Input에 placeholder를 입력하면 placeholder가 렌더링 된다.", () => {
    const inputComponent = render(<Input placeholder="Test" />)
    expect(inputComponent.getByPlaceholderText("Test")).toBeInTheDocument()
  })
  it("Input에 onChange 함수를 넣으면 입력한 값이 변경된다.", async () => {
    const inputComponent = render(<Input onChange={onChangeFn} />)
    const input = inputComponent.getByRole("textbox") as HTMLInputElement
    await userEvent.type(input, "Test")
    expect(input.value).toBe("Test")
  })
  it("Input에 className을 추가하면 해당 클래스가 추가된다.", () => {
    const inputComponent = render(<Input className="test-class" />)
    expect(inputComponent.getByRole("textbox")).toHaveClass("test-class")
  })
  it("Input을 focus하면 border-color가 변경된다.", async () => {
    const inputComponent = render(<Input />)
    const input = inputComponent.getByRole("textbox")
    await userEvent.click(input)
    expect(input).toHaveClass("focus:border-essential-500")
  })
})
