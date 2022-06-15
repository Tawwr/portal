export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function convertToBoolean(value: string | boolean) {
  return (value + '').toLowerCase() === 'true'
}
