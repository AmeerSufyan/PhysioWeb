export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="fixed w-full bg-gradient-to-r from-blue-100 to-blue-300  dark:bg-gray-900 shadow z-50 px-8 py-4 flex justify-between">
      <h1 className="text-xl font-bold text-primary">Dr. Munish Kumar</h1>

      <div className="flex gap-6 text-white hover:text-black">
        <p onClick={() => scrollTo("home")}>Home</p>
        <p onClick={() => scrollTo("about")}>About</p>
        <p onClick={() => scrollTo("services")}>Services</p>
        <p onClick={() => scrollTo("contact")}>Contact</p>
      </div>
    </nav>
  );
}