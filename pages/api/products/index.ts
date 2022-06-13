// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { convertToBoolean, flattenGoogleSheetProduct } from 'lib'
import type { NextApiRequest, NextApiResponse } from 'next'
import { extractSheets } from 'spreadsheet-to-json'
import { GoogleSheetsData } from 'types'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY!, 'base64').toString()
  )

  extractSheets(
    {
      // your google spreadsheet key
      spreadsheetKey: process.env.SHEET_KEY,
      // your google oauth2 credentials or API_KEY
      credentials,
      // optional: names of the sheets you want to extract
      sheetsToExtract: [
        'Products',
        'ProductVariants',
        'Categories',
        'ProductImages',
      ],
    },
    function (err: any, data: GoogleSheetsData) {
      const products = data.Products.map((product) =>
        flattenGoogleSheetProduct(data, product)
      )

      res.status(200).json(products)
    }
  )
}
