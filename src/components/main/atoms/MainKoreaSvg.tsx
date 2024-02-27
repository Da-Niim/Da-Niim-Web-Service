export default function MainKoreaSvg({ ...props }: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 524 631"
      aria-label="Map of South Korea"
      className="fill-[#CDCCCC] stroke-[#FDFDFD] w-auto"
      {...props}
    >
      {props.children}
    </svg>
  )
}
