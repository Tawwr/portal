import { GoogleSheetProduct, GoogleSheetsData } from 'types'

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export function convertToBoolean(value: string | boolean) {
  return (value + '').toLowerCase() === 'true'
}

export function flattenGoogleSheetProduct(
  data: GoogleSheetsData,
  product: GoogleSheetProduct
) {
  const images = data.ProductImages.filter(
    (image) => image.productId === product.Id
  )
  const variants = data.ProductVariants.filter(
    (variant) => variant.productId === product.Id
  )
  const category = data.Categories.find(
    (category) => category.Id === product.categoryId
  )

  return {
    ...product,
    trending: convertToBoolean(product.trending),
    featured: convertToBoolean(product.featured),
    images,
    category,
    variants,
  }
}
