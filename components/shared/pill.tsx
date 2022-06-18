const Pill = ({
  title,
  id,
  onClick,
}: {
  title: string
  id: string | number
  onClick?: (id: string | number) => void
}) => {
  return (
    <span className="mr-2 mb-2 inline-flex items-center rounded-full bg-black py-0.5 pl-2.5 pr-1 text-sm font-medium text-white">
      {title}
      <button
        onClick={() => onClick?.(id)}
        type="button"
        className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-white hover:bg-white hover:text-black focus:bg-black focus:text-white focus:outline-none"
      >
        <span className="sr-only">Remove large option</span>
        <svg
          className="h-2 w-2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 8 8"
        >
          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  )
}
export default Pill
