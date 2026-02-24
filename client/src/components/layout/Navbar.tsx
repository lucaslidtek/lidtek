import { Link } from "wouter";
import logoWhite from "@assets/lidtek-primary-logo_white_1771959392591.png";
import logoBlack from "@assets/lidtek-primary-logo_black_1771959392591.png";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-6 md:px-12 flex items-center justify-between">
      <Link href="/" className="z-50 cursor-pointer">
        {/* Using the white logo since mix-blend-difference will invert it appropriately */}
        <img src={logoWhite} alt="Lidtek Logo" className="h-6 md:h-8 w-auto" />
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-white font-medium text-sm z-50">
        <a href="#manifesto" className="hover:text-primary transition-colors uppercase tracking-widest">Manifesto</a>
        <a href="#approach" className="hover:text-primary transition-colors uppercase tracking-widest">Approach</a>
        <a href="#model" className="hover:text-primary transition-colors uppercase tracking-widest">Model</a>
        <a href="#contact" className="px-5 py-2 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all rounded-full uppercase tracking-widest">
          Engage
        </a>
      </div>
    </nav>
  );
}
