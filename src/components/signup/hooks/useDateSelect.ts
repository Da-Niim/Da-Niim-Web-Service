export const useDateSelect = () => {
  const now = new Date()

  const years = Array.from({ length: now.getFullYear() - 1929 }, (_, index) => now.getFullYear() - index)

  const months = Array.from({ length: 12 }, (_, index) => (index + 1 < 10 ? "0" + (index + 1) : "" + (index + 1)))

  const days = Array.from({ length: 30 }, (_, index) => (index + 1 < 10 ? "0" + (index + 1) : "" + (index + 1)))

  return { years, months, days }
}
