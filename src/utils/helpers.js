export function formatPrice(num) {
  return (Math.round((num + Number.EPSILON) * 100) / 100).toLocaleString(
    'en-US'
  )
}

export function formatNumber(num) {
  return Math.round(num).toLocaleString('en-US')
}
