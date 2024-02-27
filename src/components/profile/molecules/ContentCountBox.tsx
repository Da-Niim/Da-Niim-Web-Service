interface ContentCountBoxProps {
  count: number
  title: string
}

const ContentCountBox = ({ title, count }: ContentCountBoxProps) => {
  return (
    <div className="flex flex-col text-gray-900 text-center">
      <div className="text-sm">{title}</div>
      <div className="mt-1 text-lg font-bold">{count}</div>
    </div>
  )
}

export default ContentCountBox
