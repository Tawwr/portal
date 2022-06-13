export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export function convertToBoolean(value: string | boolean) {
  return (value + '').toLowerCase() === 'true'
}
