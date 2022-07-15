/* eslint-disable jsx-a11y/alt-text */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, XIcon } from '@heroicons/react/outline'
import QRCode from 'react-qr-code'
import Countdown from 'react-countdown'
import { delay } from 'lib'
import Layout from 'components/layout'

const INIT =
  'd7a9c330f7ffd6a7af4cf876503db74745cab054700750519a97d85ada9d71a7bed97b5bc74cf441f2d04f18cb67371ff441b6447084ac5702aa816f7b71541330ac1fa11b80cb5bb67ebc29d46e55bbabd6a68b757013688f6f4ca9193a5cc10a27f3a3c26053bc184a7c4d72a76e78a0510f7895a72837512c6a6106b272309b903be7ec7a6a5933cf0595c0ded7fd'
export default function Example() {
  const [open, setOpen] = useState(true)
  const [countKey, setCountKey] = useState(new Date().toString())
  const [CODE, setCode] = useState(INIT)

  const CODE2 =
    'd7a9c330f7ffd6a7af4cf876503db74745cab054700750519a97d85ada9d71a7b8928ef1680e9c3f9d3dd0d84897c08a4204968bbd28e9ae7d48f9ef03f5f4c7cc155d93b9f0f2db410c211af343ec9a7cd577cd6098aab5368c5973f08d5bcf18cc628cc18b6d8a0cc749ff87f2502382c3149c19ee8da46ce66729ba51e4885a4e9e51ec48b5eea71c551a7feb2763'
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-100" onClose={() => {}}>
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

          <div className="fixed inset-0 z-100 overflow-y-auto">
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
                    />
                  </div>
                  <div className="relative min-h-[92vh] transform overflow-hidden rounded-xl bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="relative mb-20 flex justify-end">
                        <img
                          src="/hacienda.jpg"
                          className="absolute left-0 right-0 m-auto h-9 w-auto"
                        />
                        <Countdown
                          date={Date.now() + 10000}
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
                          <span>Owner: Moustafa Elhadary</span>
                          <span>Unit: HBWV-CAB-831</span>
                        </div>
                        <img
                          src="/Avatar.jpeg"
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
