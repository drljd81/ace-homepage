import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import { site } from "@/lib/site";

/* ============================================================================
   병원 소개
   ※ 주석의 [위험도: 상/중/하] 는 의료광고 관련 검토 표시입니다.
     자세한 근거와 대안 문구는 docs/문구-위험도-검토.md 를 보세요.
   ========================================================================== */

export const metadata: Metadata = {
  title: "병원 소개",
  description:
    "강릉 서울에이스정형외과의원 소개. 전신 촉진을 통한 진찰, 원인 중심의 비수술 치료, 개별화 재활. 진료시간과 오시는 길 안내.",
};

const values = [
  {
    title: "손으로 확인합니다",
    body: "영상 검사는 많은 것을 알려 주지만 전부를 알려 주지는 않습니다. 목에서 발까지 직접 짚어 가며 몸이 어떻게 균형을 잃었는지 확인하는 데 진찰 시간의 대부분을 씁니다.",
  },
  {
    title: "원인을 먼저 봅니다",
    body: "통증을 빠르게 줄이는 방법은 있습니다. 다만 그것만으로 끝내면 같은 일이 반복됩니다. 증상이 시작된 자리를 찾는 것을 진료의 출발점으로 삼습니다.",
  },
  {
    title: "같은 처방을 반복하지 않습니다",
    body: "같은 진단명이라도 생활과 직업, 몸 쓰는 방식이 다릅니다. 치료와 재활 계획은 사람마다 다르게 세웁니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== 페이지 머리 ===== */}
      <section className="pagehead">
        <div className="container">
          <span className="section__eyebrow">병원 소개</span>
          <h1 className="pagehead__title">
            {site.name}
          </h1>
          <p className="pagehead__lead">
            강릉 금학동에서 비수술 관절·척추 치료와 재활을 진료합니다. 오래
            반복되어 온 증상일수록, 원인을 찾는 진찰에 시간을 들입니다.
          </p>
        </div>
      </section>

      {/* ===== 원장 인사말 ===== */}
      <section className="section">
        <div className="container doctor">
          <div className="doctor__photo">
            <Placeholder
              label="대표원장 사진"
              hint="진료 가운 착용 / 권장 3:4 세로"
              ratio="3 / 4"
            />
          </div>

          <div className="doctor__body">
            <span className="section__eyebrow">대표원장 인사말</span>
            <h2 className="section__title">
              &ldquo;그동안 무엇이 다뤄지지 않았는지를 봅니다&rdquo;
            </h2>

            {/* [위험도: 하] 인사말. 사실 진술과 진료 철학 중심 */}
            <p className="doctor__p">
              진료실에서 가장 자주 듣는 말은 &ldquo;여러 군데 다녀 봤는데 그때만
              괜찮아진다&rdquo;는 이야기입니다. 오래 재발해 온 분들을 보면
              대부분 공통점이 있습니다. 그동안의 치료가 증상을 가라앉히는 데
              집중되어 있었고, 그 증상을 만든 원인까지는 다뤄지지 않았던
              경우입니다.
            </p>
            <p className="doctor__p">
              그래서 저희는 아픈 곳만 보지 않습니다. 전신을 촉진해 몸 전체의
              균형을 확인하고, 그 결과를 토대로 재생주사와 도수치료,
              체외충격파를 선택합니다. 치료가 끝이 아니라, 다시 무너지지 않도록
              그 사람에게 맞는 재활까지 함께 가는 것을 진료의 기본으로 삼고
              있습니다.
            </p>

            <p className="doctor__sign">
              대표원장 <strong>{site.director}</strong>
            </p>

            {/* TODO: 약력을 채워 주세요. 학회·수련 이력은 사실과 일치해야 하며,
                근거 없는 경력 표기는 의료광고 심의에서 문제가 됩니다. */}
            <ul className="doctor__cv">
              <li>정형외과 전문의</li>
              <li>TODO — 출신 의과대학 / 수련 병원</li>
              <li>TODO — 소속 학회 및 연수 과정</li>
              <li>TODO — 이전 근무 이력</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 진료 철학 ===== */}
      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">진료 원칙</span>
            <h2 className="section__title">세 가지를 지킵니다</h2>
          </div>

          <div className="grid grid--3">
            {values.map((v) => (
              <div className="card" key={v.title}>
                <h3 className="treat__name">{v.title}</h3>
                <p className="treat__body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 병원 둘러보기 ===== */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">공간</span>
            <h2 className="section__title">병원 둘러보기</h2>
            <p className="section__lead">
              제중빌딩 2층과 3층을 함께 사용합니다. 진찰실과 치료실, 재활
              공간이 한 건물 안에 있습니다.
            </p>
          </div>

          <div className="gallery">
            <Placeholder label="접수·대기 공간" ratio="4 / 3" />
            <Placeholder label="진찰실" ratio="4 / 3" />
            <Placeholder label="도수치료실" ratio="4 / 3" />
            <Placeholder label="재활 운동 공간" ratio="4 / 3" />
          </div>
          <p className="note">
            사진 4장을 가로 4:3 비율로 준비해 주시면 그대로 교체됩니다.
          </p>
        </div>
      </section>

      {/* ===== 멀리서 오시는 분 ===== */}
      <section className="section section--dark">
        <div className="container ccj">
          <div>
            <span className="section__eyebrow">타 지역에서 오시는 분께</span>
            <h2 className="section__title">
              멀리서 찾아오시는 경우가 많습니다
            </h2>
            <p className="section__lead">
              반복되는 두통·이명·어지럼으로 강릉 밖에서 내원하시는 분들이
              있습니다. 먼 길을 헛되이 하지 않으시도록 아래를 준비해 주세요.
            </p>
            <ul className="ticks ticks--onDark">
              <li>
                내원 전 <a href={site.telHref}>{site.tel}</a>로 전화 주시면 진료
                가능 시간을 먼저 확인해 드립니다
              </li>
              <li>
                그동안 받으신 검사·치료 내역을 정리해 오시면 진찰이 빨라집니다
              </li>
              <li>이전 병원의 영상 자료(CD 등)가 있다면 가져와 주세요</li>
              <li>
                첫날은 진찰에 시간이 걸립니다. 일정에 여유를 두고 오시길
                권합니다
              </li>
            </ul>
          </div>

          <Placeholder
            label="병원 외관 또는 건물 사진"
            hint="제중빌딩 입구 / 찾아오실 때 기준이 되는 사진"
            ratio="4 / 3"
          />
        </div>
      </section>

      {/* ===== 진료 안내 ===== */}
      <section className="section" id="info">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">진료 안내</span>
            <h2 className="section__title">진료시간과 오시는 길</h2>
          </div>

          <div className="info">
            <div className="card">
              <h3 className="info__title">진료시간</h3>
              {/* TODO: lib/site.ts 의 hours 값을 실제 진료시간으로 바꿔 주세요 */}
              <ul className="info__hours">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span>
                    <strong>{h.time}</strong>
                    {h.note ? <em>{h.note}</em> : null}
                  </li>
                ))}
              </ul>

              <h3 className="info__title" style={{ marginTop: 28 }}>
                전화
              </h3>
              <a className="info__tel" href={site.telHref}>
                {site.tel}
              </a>

              <h3 className="info__title" style={{ marginTop: 28 }}>
                주소
              </h3>
              <p className="info__addr">{site.address}</p>
              {/* TODO: 주차 안내를 확인해서 채워 주세요 */}
              <p className="info__addr" style={{ marginTop: 8 }}>
                주차 — TODO (건물 주차장 / 인근 공영주차장 여부)
              </p>
              <a
                className="btn btn--ghost"
                style={{ marginTop: 16 }}
                href={site.naverMapUrl}
                target="_blank"
                rel="noreferrer"
              >
                네이버 지도로 보기
              </a>
            </div>

            <Placeholder
              label="약도 / 지도"
              hint="네이버 지도 스크린샷 또는 지도 임베드 자리"
              minHeight={380}
            />
          </div>
        </div>
      </section>
    </>
  );
}
