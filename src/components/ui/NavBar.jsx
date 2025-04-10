export default function NavBar() {
  return (
    <nav className="flex justify-between p-5">
      <div>
      <a className="text-nier-400 font-megafield text-2xl" href="#">
        By Max
      </a>
      <span className="text-nier-400 font-megafield text-2xl pl-5 opacity-80">(developpeur web)</span>
      </div>
      <div className="flex gap-2">
        <a className="text-nier-400 font-megafield text-2xl" href="#">
          projets,
        </a>
        <a className="text-nier-400 font-megafield text-2xl" href="#">
          a propos,
        </a>
        <a className="text-nier-400 font-megafield text-2xl" href="#">
          contact
        </a>
      </div>
    </nav>
  );
}
