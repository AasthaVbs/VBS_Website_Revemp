export function Footer() {
  return (
    <footer className="mt-14 border-t border-[#F6D4D7] bg-white">
      <div className="container flex flex-col gap-3 py-8 text-sm text-black/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Virtual Building Studio</p>
        <p>Scalable architecture for modern web products.</p>
      </div>
    </footer>
  );
}
