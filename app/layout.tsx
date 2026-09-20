import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/site";
import "./globals.css";
import "./pages.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | 강릉 비수술 관절·척추 치료`,
    template: `%s | ${site.name}`,
  },
  description:
    "강릉 서울에이스정형외과의원. 전신 촉진으로 몸 전체의 균형을 확인하고, 증상이 아닌 원인을 찾아 재생주사·도수치료·체외충격파와 개별화 재활로 치료합니다.",
  openGraph: {
    title: `${site.name} | 강릉 비수술 관절·척추 치료`,
    description:
      "반복해서 재발하는 통증, 원인을 찾는 진료. 강릉 금학동 서울에이스정형외과의원.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* 한글 웹폰트 Pretendard */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
