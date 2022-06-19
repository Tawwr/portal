import { supabase } from 'lib/supabase'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setFieldValue: (value: string) => void,
  label:string
}
function PhotoUpload({ setFieldValue, label, ...props }: props) {
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const avatarFile = event?.target?.files?.[0]
      if (!avatarFile) return
      const imageName = uuidv4()
      setLoading(true)
      const { data, error } = await supabase.storage
        .from('images')
        .upload(imageName, avatarFile)

      if (error || !data) return console.log(error)

      const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data.Key}`
      setImageURL(url)

      setFieldValue(url)
    } catch (error) {
      console.error({ error })
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="mt-6 flex-grow lg:mt-0 ">
        <p className="text-sm font-medium text-gray-700" aria-hidden="true">
          {label}
        </p>
        <div className="mt-1 lg:hidden">
          <div className="flex items-center">
            {imageURL ? (
              <div
                className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                aria-hidden="true"
              >
                <img
                  className="h-full w-full rounded-full"
                  src={imageURL}
                  alt=""
                />
              </div>
            ) : (
              <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            )}

            <div className="ml-5 rounded-md shadow-sm">
              <div className="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                <label
                  htmlFor="mobile-user-photo"
                  className="pointer-events-none relative text-sm font-medium leading-4 text-gray-700"
                >
                  <span> {loading ? 'Loading...' : 'upload'}</span>
                  <span className="sr-only"> user photo</span>
                </label>
                <input
                  id="mobile-user-photo"
                  name="user-photo"
                  type="file"
                  className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                  onChange={uploadFile}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden overflow-hidden rounded-full lg:flex">
          {imageURL ? (
            <img
              className="relative my-2 mb-5 h-12 w-12 rounded-full"
              src={imageURL}
              alt=""
            />
          ) : (
            <span className="my-2 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          )}

          <label
            htmlFor="desktop-user-photo"
            className="absolute inset-0 my-2 flex h-12 w-12 items-center justify-center rounded-full bg-black bg-opacity-75 text-xs font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
          >
            <span> {loading ? 'Loading...' : 'upload'}</span>
            <span className="sr-only"> user photo</span>
            <input
              type="file"
              id="desktop-user-photo"
              name="user-photo"
              className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
              onChange={uploadFile}
            />
          </label>
        </div>
      </div>
    </>
  )
}

export default PhotoUpload
