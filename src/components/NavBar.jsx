export default function NavBar() {
    return (
      <nav className="flex justify-between p-5">
        <a className="text-nier-400 font-megafield text-2xl" href="#">By Max</a>
        <div className="flex gap-10">
          <a className="text-nier-400 font-megafield text-2xl" href="#">Projets</a>
          <a className="text-nier-400 font-megafield text-2xl" href="#">Contact</a>
        </div>
      </nav>
    )
}