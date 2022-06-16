
function TwoSidedWrapper({
  LeftComponent,
  RightComponent,
  imageURL,
}: {
  LeftComponent: React.ReactNode
  RightComponent: React.ReactNode
  imageURL: string
}) {
  return (
    <>
      <div className="h-screen bg-white">
        <div className="flex min-h-full w-full">
          <div className="flex w-[45%] flex-1 flex-col items-start justify-start py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-16">
            <div className="w-full lg:w-[90%]">{LeftComponent}</div>
          </div>
          <div className="fixed right-0 hidden h-full w-[58%] flex-col items-center justify-center lg:flex">
            <img
              className="absolute inset-0 -z-10 h-full w-full object-cover"
              src={imageURL}
              alt=""
            />
            <div className="h-fit w-10/12 rounded-3xl bg-white p-10 shadow-lg">
              {RightComponent}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwoSidedWrapper
