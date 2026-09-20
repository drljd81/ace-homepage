import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__logo" aria-label={site.name}>
          {/* 로고 원본: public/images/logo.jpg (370x76) */}
          <Image
            src="/images/logo.jpg"
            alt={site.name}
            width={370}
            height={76}
            priority
          />
        </Link>

        {/* 모바일에서는 이 줄이 로고 아래로 내려갑니다 */}
        <nav className="header__links">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header__tel" href={site.telHref}>
          <span>전화</span> {site.tel}
        </a>
      </div>
    </header>
  );
}
