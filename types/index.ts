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


export interface ListOptionType {
  id: number | string
  name: string
  avatar?: string
  [key: string]: any
}

export interface DummyCompany {
  id: string
  name: string
  imageUrl: string
  description: string

}
export interface NewJobPost {
  minSalary: string;
  website: string;
  linkedIn: string;
  maxSalary: string;
  apply_url: string;
  jobTitle: string;
  description: string;
  location:string;
  company?: DummyCompany;
  experience: string[];
  jobType?: ListOptionType
}