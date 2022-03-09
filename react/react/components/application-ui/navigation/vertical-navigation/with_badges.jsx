/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Dashboard', href: '#', current: true, count: '5' },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false, count: '19' },
  { name: 'Calendar', href: '#', current: false, count: '20+' },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <span className="truncate">{item.name}</span>
          {item.count ? (
            <span
              className={classNames(
                item.current ? 'bg-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200',
                'ml-auto inline-block py-0.5 px-3 text-xs rounded-full'
              )}
            >
              {item.count}
            </span>
          ) : null}
        </a>
      ))}
    </nav>
  )
}
