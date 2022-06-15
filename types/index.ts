import type { BaseHit } from 'instantsearch.js';

export type AppStateType = {}

export interface DummyCompany {
  id: string
  imageUrl: string
  name: string
  description: string
}

export interface DummyAmount {
  value: number
  currency: string
}

export interface DummySalaryRange {
  min: DummyAmount
  max: DummyAmount
}

export interface DummyLocation {
  city: string
  country: string
}

export interface DummyJob extends BaseHit  {
  id: string
  name: string
  company: DummyCompany
  is_Remote: boolean
  type: string[]
  experience: string[]
  apply_url: string
  date_posted: Date
  salary_range: DummySalaryRange
  locations: DummyLocation[]
  description: string
}
