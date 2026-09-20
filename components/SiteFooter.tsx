import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="footer__name">{site.name}</p>
            <p>{site.address}</p>
            <p>
              대표원장 {site.director} · 전화{" "}
              <a href={site.telHref} style={{ color: "#fff", fontWeight: 600 }}>
                {site.tel}
              </a>
            </p>
            {/* TODO: 사업자등록번호는 기존 사이트 기준 211-91-82196 입니다. 확인 후 유지/수정하세요. */}
            <p>사업자등록번호 211-91-82196</p>
          </div>

          <div>
            <p className="footer__name">진료시간</p>
            <ul>
              {site.hours.map((h) => (
                <li key={h.day}>
                  {h.day} · {h.time}
                  {h.note ? ` (${h.note})` : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="footer__bottom">
          © {new Date().getFullYear()} {site.nameEn}. All rights reserved.
          <br />본 홈페이지의 의료 정보는 일반적인 안내이며, 개별 환자의 진단과
          치료를 대신하지 않습니다.
        </p>
      </div>
    </footer>
  );
}
