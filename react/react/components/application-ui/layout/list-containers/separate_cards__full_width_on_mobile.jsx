/* This example requires Tailwind CSS v2.0+ */
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
