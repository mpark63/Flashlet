import Link from 'next/link'

const Flashlet = () => {
  return (
    <div className="flex items-center bg-[#2e026d] p-5">
      <Link
        className="rounded-xl p-4 text-white text-center hover:bg-white/20 cursor-pointer"
        href={`/`}
      >
        <h3 className="text-3xl font-extrabold">Flashlet</h3>
      </Link>
    </div>
  )
}

export default Flashlet
