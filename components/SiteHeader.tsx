import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__logo">
          {site.name}
          {/* 로고 이미지가 준비되면 위 텍스트를 <img src="/images/logo.svg" /> 로 교체하세요. */}
          <span>{site.nameEn.toUpperCase()}</span>
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
