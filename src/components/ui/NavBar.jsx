export default function NavBar() {
  return (
    <nav className="flex justify-between p-5">
      <a className="text-nier-400 font-megafield text-2xl" href="#">
        By Max
      </a>
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
