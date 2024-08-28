import NavLinks from "@/app/ui/nav-links";
import NavSections from "@/app/ui/nav-sections";

export default function Navi() {
  return (
    <nav className="fixed top-0 right-0">
      <div className="flex justify-end items-center px-4 py-6">
        <NavSections />
      </div>
    </nav>
  );
}
