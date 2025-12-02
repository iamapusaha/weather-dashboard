import { useState } from "react";

import Favourite from "./Favourite";
import FavouriteList from "./FavouriteList";
import LogoSrction from "./LogoSection";
import Search from "./Search";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-linear-to-b from-black/60 to-black/0 pb-10">
      <nav className="mx-auto container flex items-center justify-between py-6">
        <LogoSrction />

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favourite onShow={() => setShowModal(!showModal)} />
          {showModal && <FavouriteList />}
        </div>
      </nav>
    </header>
  );
}
