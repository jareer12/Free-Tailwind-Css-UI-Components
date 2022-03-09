/* This example requires Tailwind CSS v2.0+ */
const steps = [
  { name: 'Step 1', href: '#', status: 'complete' },
  { name: 'Step 2', href: '#', status: 'current' },
  { name: 'Step 3', href: '#', status: 'upcoming' },
  { name: 'Step 4', href: '#', status: 'upcoming' },
]

export default function Example() {
  return (
    <nav className="flex items-center justify-center" aria-label="Progress">
      <p className="text-sm font-medium">
        Step {steps.findIndex((step) => step.status === 'current') + 1} of {steps.length}
      </p>
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {steps.map((step) => (
          <li key={step.name}>
            {step.status === 'complete' ? (
              <a href={step.href} className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
                <span className="sr-only">{step.name}</span>
              </a>
            ) : step.status === 'current' ? (
              <a href={step.href} className="relative flex items-center justify-center" aria-current="step">
                <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
                  <span className="w-full h-full rounded-full bg-indigo-200" />
                </span>
                <span className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
                <span className="sr-only">{step.name}</span>
              </a>
            ) : (
              <a href={step.href} className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
                <span className="sr-only">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
