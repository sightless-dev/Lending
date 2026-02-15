export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-black/25 py-8">
      <div className="mx-auto flex w-[min(1200px,calc(100%-48px))] items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          {/* Убрали рамку и фон */}
          <span className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-xl">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-cover" />
          </span>
          <span className="text-[14px] text-white/60">Media Buyer • Gambling Vertical</span>
        </div>
        <div className="text-[14px] text-white/55">© {year}</div>
      </div>
    </footer>
  );
}