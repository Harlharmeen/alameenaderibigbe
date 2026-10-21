import Link from 'next/link';

export default function Footer(){
  return <footer className="border-t grid-line py-10">
    <div className="container flex flex-col gap-6 text-sm md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-extrabold tracking-[-.04em]">Al-ameen Aderibigbe<span className="text-[color:var(--accent)]">.</span></p>
        <p className="mt-2 max-w-sm text-xs leading-5 text-[color:var(--muted)]">Brand Identity & Product Designer creating clear identities and useful digital experiences.</p>
      </div>
      <div className="flex gap-5 text-xs text-[color:var(--muted)]">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <a href="#contact">Work with me</a>
      </div>
    </div>
  </footer>
}
