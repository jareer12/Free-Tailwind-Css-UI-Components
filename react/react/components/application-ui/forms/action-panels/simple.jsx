/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Delete your account</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Once you delete your account, you will lose all data associated with it.</p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
          >
            Delete account
          </button>
        </div>
      </div>
    </div>
  )
}
