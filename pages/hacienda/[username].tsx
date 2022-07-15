/* eslint-disable jsx-a11y/alt-text */
/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import TTextInput from 'components/shared/textInput'
import { useFormik } from 'formik'
import { delay } from 'lib'
import React, { ChangeEvent, Fragment, useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import QRCode from 'react-qr-code'
import * as Yup from 'yup'
const INIT =
  'd7a9c330f7ffd6a7af4cf876503db74745cab054700750519a97d85ada9d71a7bed97b5bc74cf441f2d04f18cb67371ff441b6447084ac5702aa816f7b71541330ac1fa11b80cb5bb67ebc29d46e55bbabd6a68b757013688f6f4ca9193a5cc10a27f3a3c26053bc184a7c4d72a76e78a0510f7895a72837512c6a6106b272309b903be7ec7a6a5933cf0595c0ded7fd'
const CODE2 =
  'd7a9c330f7ffd6a7af4cf876503db74745cab054700750519a97d85ada9d71a7b8928ef1680e9c3f9d3dd0d84897c08a4204968bbd28e9ae7d48f9ef03f5f4c7cc155d93b9f0f2db410c211af343ec9a7cd577cd6098aab5368c5973f08d5bcf18cc628cc18b6d8a0cc749ff87f2502382c3149c19ee8da46ce66729ba51e4885a4e9e51ec48b5eea71c551a7feb2763'

export default function Example() {
  const [open, setOpen] = useState(false)
  const [countKey, setCountKey] = useState(new Date().toString())
  const [CODE, setCode] = useState(INIT)
  const [selectedFile, setSelectedFile] = useState<File | null>()
  const [preview, setPreview] = useState<string | null>()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files?.[0])
  }
  const initialValues = {
    name: '',
    unit: 'HBWV-CAB-XXX',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      unit: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      setOpen(true)
    },
  })
  return (
    <>
      <div className="px-6 py-10">
        <form onSubmit={formik.handleSubmit} className="space-y-4" noValidate>
          <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="col-span-6 mt-1">
              <TTextInput
                formik={formik}
                formikKey="name"
                placeholder="John Doe"
                title="Your name"
                required
              />
            </div>
          </div>
          <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="col-span-6">
              <TTextInput
                formik={formik}
                formikKey="unit"
                placeholder="HBWV-CAB-XXX"
                title="Unit Number"
                required
              />
            </div>
          </div>
          <div className="grid justify-between gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="col-span-6">
              <input type="file" onChange={(e) => onSelectFile(e)} />
              {selectedFile && (
                <img src={preview || ''} className="h-16 w-16 rounded-full" />
              )}
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-end gap-5">
            <button
              type="submit"
              className="text-md flex w-[35%] justify-center rounded-md border border-transparent border-black bg-black py-3 px-4 font-medium  tracking-wide text-white shadow-sm hover:border-2 hover:bg-transparent hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="z-100 relative" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="z-100 fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center pb-4 text-center sm:items-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="w-full px-4">
                  <div className="relative">
                    <XIcon
                      className="h-8 w-8 font-light text-white"
                      aria-hidden="true"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <div className="relative min-h-[94vh] transform overflow-hidden rounded-xl bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="relative mb-20 flex justify-end">
                        <img
                          src="/hacienda.jpg"
                          className="absolute left-0 right-0 m-auto h-9 w-auto"
                        />
                        <Countdown
                          date={Date.now() + 30000}
                          key={countKey}
                          intervalDelay={0}
                          renderer={({ formatted, completed }) => {
                            return (
                              <span className="text-3xl font-extrabold">
                                {formatted.seconds}
                              </span>
                            )
                          }}
                          onComplete={async (props) => {
                            setCountKey(new Date().toString())
                            setCode(CODE2)
                            await delay(100)
                            setCode(INIT)
                          }}
                        />
                      </div>

                      <QRCode value={CODE} className="mx-auto justify-center" />
                      <div className="mt-4 flex items-end justify-between">
                        <div className="flex flex-col">
                          <span>Owner: {formik.values.name || 'John Doe'}</span>
                          <span>
                            Unit: {formik.values.unit || 'HBWV-CAB-123'}
                          </span>
                        </div>
                        <img
                          src={preview || '/Avatar.jpeg'}
                          className="h-16 w-16 rounded-full"
                        />
                      </div>
                      <div className="mt-4 flex items-start justify-between border-t-2 border-x-stone-700 pt-2">
                        <span className="text-xs font-thin">
                          www.iamlyve.com
                        </span>
                        <img src="/lyve.png" className="h-9 w-auto" />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
