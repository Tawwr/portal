import { flattenGoogleSheetProduct } from 'lib'
import type { NextApiRequest, NextApiResponse } from 'next'
import { extractSheets } from 'spreadsheet-to-json'
import { GoogleSheetsData } from 'types'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query

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
      const product = data.Products.find((product) => product.slug === slug)

      if (!product) {
        return res.status(404).json({ message: 'Product not found' })
      }

      const response = flattenGoogleSheetProduct(data, product)
      res.status(200).json(response)
    }
  )
}
