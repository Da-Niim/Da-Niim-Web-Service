export default function MainKoreaSvg({ ...props }: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 524 631"
      aria-label="Map of South Korea"
      className="fill-[#f1f1f1] stroke-[#2c2c2c]"
      {...props}
    >
      {props.children}
    </svg>
  )
}
