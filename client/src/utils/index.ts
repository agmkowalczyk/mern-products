export function parseDate(dateString: Date | undefined): string {
  if (!dateString) return ""
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = ("0" + (date.getMonth() + 1)).slice(-2)
  const day = ("0" + date.getDate()).slice(-2)
  return `${year}-${month}-${day}`
}

export function formatPrice(amount: number | undefined): string {
  if (!amount) return ""
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ")
}
