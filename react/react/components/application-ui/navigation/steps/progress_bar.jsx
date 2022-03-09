/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className>
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-gray-900">Migrating MySQL database...</p>
      <div className="mt-6" aria-hidden="true">
        <div className="bg-gray-200 rounded-full overflow-hidden">
          <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '37.5%' }} />
        </div>
        <div className="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
          <div className="text-indigo-600">Copying files</div>
          <div className="text-center text-indigo-600">Migrating database</div>
          <div className="text-center">Compiling assets</div>
          <div className="text-right">Deployed</div>
        </div>
      </div>
    </div>
  )
}
