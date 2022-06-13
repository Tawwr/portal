export interface DummyProduct {
  id: number
  name: string
  href: string
  color: string
  price: string
  availableQty: number
  imageSrc: string
  imageAlt: string
}

export interface CartItem extends DummyProduct {
  quantity: number
}

export type DummyCategory = {
  name: string
  featured: DummyProduct[]
}
export type AppStateType = {
  products: DummyProduct[]
  categories: DummyCategory[]

  cart: CartItem[]
}

export type Page = {
  name: string
  href: string
}
export type Navigation = {
  categories: DummyCategory[]
  pages: Page[]
}

export interface GoogleSheetProduct {
  Id: string
  name: string
  slug: string
  categoryId: string
  trending: string
  featured: string
}

export interface GoogleSheetProductVariant {
  id: string
  productId: string
  color: string
  size: string
  availableQty: string
  price: string
}

export interface GoogleSheetCategory {
  Id: string
  name: string
}

export interface GoogleSheetProductImages {
  id: string
  productId: string
  imageSrc: string
  imageAlt: string
}

export type GoogleSheetsData = {
  Products: GoogleSheetProduct[]
  ProductVariants: GoogleSheetProductVariant[]
  Categories: GoogleSheetCategory[]
  ProductImages: GoogleSheetProductImages[]
}

export interface Product extends GoogleSheetProduct {
  images: GoogleSheetProductImages[]
  variants: GoogleSheetProductVariant[]
  category: GoogleSheetCategory
}
export type ProductsAPIResponse = Product[]

export interface Set {
  rep: number
  weight: number
}

export interface Exercise {
  id: number
  name: string
  imageSrc: string
  imageAlt: string
  sets?: Set[]
  description?: string
}

export interface Workout {
  id: number
  name: string
  date: string
  total: string
  exercises: Exercise[]
}
