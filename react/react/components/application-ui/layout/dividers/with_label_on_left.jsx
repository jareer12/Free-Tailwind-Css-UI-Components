/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="pr-2 bg-white text-sm text-gray-500">Continue</span>
      </div>
    </div>
  )
}
