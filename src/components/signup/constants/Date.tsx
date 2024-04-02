export const DateComponent = () => {
  const now = new Date()

  let years = []
  for (let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y)
  }

  let months = []
  for (let m = 1; m <= 12; m += 1) {
    if (m < 10) {
      months.push("0" + m.toString())
    } else {
      months.push(m.toString())
    }
  }
  let days = []
  for (let d = 1; d <= 30; d += 1) {
    if (d < 10) {
      days.push("0" + d.toString())
    } else {
      days.push(d.toString())
    }
  }

  return { years, months, days }
}
