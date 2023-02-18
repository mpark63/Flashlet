import Link from 'next/link'

const Header = () => {
  return (
    <Link
      className="align-top max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      href={`/dashboard`}
    >
      <h3 className="text-xl font-extrabold text-white">Flashcard App</h3>
    </Link>
  )
}

export default Header
