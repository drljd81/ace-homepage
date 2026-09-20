import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { site } from "@/lib/site";

/* ============================================================================
   메인 페이지
   ※ 주석의 [위험도: 상/중/하] 는 의료광고 관련 검토 표시입니다.
     자세한 근거와 대안 문구는 docs/문구-위험도-검토.md 를 보세요.
   ========================================================================== */

const symptoms = [
  {
    title: "허리 통증",
    body: "앉아 있기 힘든 허리, 다리로 뻗치는 통증, 치료 후에도 몇 달마다 돌아오는 요통.",
  },
  {
    title: "무릎·어깨 관절",
    body: "계단이 두려운 무릎, 팔이 올라가지 않는 어깨. 주사를 맞아도 그때뿐인 관절 통증.",
  },
  {
    title: "두통·이명·어지럼",
    body: "검사에서는 이상이 없다는데 계속되는 두통, 귀울림, 자세를 바꿀 때 도는 어지럼.",
  },
  {
    title: "팔·다리 저림",
    body: "손끝이 저리고 감각이 둔해지는 증상, 오래 걸으면 다리가 무거워지는 느낌.",
  },
];

const treatments = [
  {
    name: "재생주사 치료",
    body: "손상되어 기능을 잃은 인대와 힘줄에 직접 접근해, 조직이 스스로 회복할 환경을 만들어 주는 주사 치료입니다.",
  },
  {
    name: "도수치료",
    body: "촉진으로 확인한 불균형을 손으로 직접 교정합니다. 통증이 있는 부위가 아니라, 원인이 되는 부위를 다룹니다.",
  },
  {
    name: "체외충격파",
    body: "만성적으로 굳어 회복이 더딘 조직에 충격파를 가해 혈류와 재생 반응을 유도합니다.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== 히어로 ===== */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="hero__eyebrow">
              강릉 금학동 · 비수술 관절척추 치료와 재활
            </span>
            {/* [위험도: 하] 진료 철학 진술. 효과 보장 표현 아님 */}
            <h1 className="hero__title">
              증상을 가라앉히는 치료와
              <br />
              원인을 찾는 치료는 다릅니다
            </h1>
            <p className="hero__lead">
              오래 반복되는 통증에는 이유가 있습니다. 서울에이스정형외과의원은
              전신 촉진으로 몸 전체의 균형을 먼저 확인하고, 증상이 시작된 자리를
              찾는 것에서 진료를 시작합니다.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={site.telHref}>
                전화 문의 {site.tel}
              </a>
              <Link className="btn btn--ghost" href="/symptoms">
                증상별로 살펴보기
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <Placeholder
              label="대표 이미지"
              hint="진료 장면 또는 병원 공간 / 권장 3:4 세로 사진"
              ratio="3 / 4"
            />
          </div>
        </div>

        <div className="container">
          <ul className="hero__facts">
            <li>
              <strong>전신 촉진 진찰</strong>
              아픈 곳만이 아니라 몸 전체의 균형을 손으로 확인합니다
            </li>
            <li>
              <strong>비수술 치료</strong>
              재생주사 · 도수치료 · 체외충격파를 상태에 맞게 조합합니다
            </li>
            <li>
              <strong>개별화 재활</strong>
              같은 진단이라도 사람마다 다른 재활 계획을 세웁니다
            </li>
          </ul>
        </div>
      </section>

      {/* ===== 이런 증상으로 오십니다 ===== */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">진료 범위</span>
            <h2 className="section__title">이런 증상으로 찾아오십니다</h2>
            <p className="section__lead">
              허리와 관절뿐 아니라, 여러 곳을 다녀도 원인을 찾지 못했던 두통과
              어지럼까지 함께 살펴봅니다.
            </p>
          </div>

          <div className="grid grid--4">
            {symptoms.map((s) => (
              <div className="card symptom-card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          <div className="section__more">
            <Link className="btn btn--ghost" href="/symptoms">
              증상별 자세한 설명 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 왜 반복되는가 ===== */}
      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">진료 관점</span>
            <h2 className="section__title">왜 치료를 받아도 다시 아플까요</h2>
            {/* [위험도: 하] 타 의료기관 비방으로 읽히지 않도록 "접근 방식의 차이"로 서술 */}
            <p className="section__lead">
              오랫동안 재발을 겪은 환자분들에게는 공통점이 있습니다. 그동안의
              치료가 증상을 가라앉히는 데 집중되어 있었고, 그 증상을 만든
              원인까지는 다루지 못한 경우입니다.
            </p>
          </div>

          <div className="compare">
            <div className="compare__col">
              <span className="compare__tag compare__tag--plain">
                증상에 집중할 때
              </span>
              <ul>
                <li>아픈 부위를 중심으로 검사합니다</li>
                <li>통증이 줄면 치료를 마칩니다</li>
                <li>같은 자리가 얼마 뒤 다시 아픕니다</li>
              </ul>
            </div>

            <div className="compare__col compare__col--ours">
              <span className="compare__tag">원인을 찾을 때</span>
              <ul>
                <li>전신을 촉진해 몸 전체의 균형을 확인합니다</li>
                <li>증상이 시작된 자리를 먼저 치료합니다</li>
                <li>그 사람에게 맞는 재활로 다시 무너지지 않게 합니다</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 두개경추 접합부 ===== */}
      <section className="section section--dark">
        <div className="container ccj">
          <div>
            <span className="section__eyebrow">재발성 난치 증상</span>
            {/* [위험도: 중] "원인인 경우가 많다"는 단정 대신 경향 서술로 완화했습니다 */}
            <h2 className="section__title">
              반복되는 두통·이명·어지럼,
              <br />
              목과 머리가 만나는 자리를 봅니다
            </h2>
            <p className="section__lead">
              여러 검사에서 이상이 없다고 들었지만 증상이 계속된다면, 두개경추
              접합부(머리뼈와 목뼈가 만나는 부위)의 불안정성이 관련된 경우가
              적지 않습니다. 이 부위는 일반적인 영상 검사만으로는 드러나지 않는
              경우가 있어, 촉진을 통한 진찰이 중요합니다.
            </p>
            {/* [위험도: 중] 원문 "의외로 매우 쉽게 치료가 가능함"은 효과 보장 소지가 있어
                "치료의 방향이 분명해집니다"로 바꿔 두었습니다. */}
            <p className="section__lead" style={{ marginTop: 18 }}>
              원인이 되는 자리를 확인하면, 오래 끌어온 증상이라도 치료의 방향이
              분명해집니다.
            </p>
            <div className="hero__actions" style={{ marginTop: 28 }}>
              <Link className="btn btn--onDark" href="/symptoms#ccj">
                두통·이명·어지럼 자세히 보기
              </Link>
            </div>
          </div>

          <Placeholder
            label="설명 이미지"
            hint="두개경추 접합부 해부 일러스트 또는 진찰 장면"
            ratio="4 / 3"
          />
        </div>
      </section>

      {/* ===== 치료 방법 ===== */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">치료 방법</span>
            <h2 className="section__title">수술하지 않고, 원인에 맞춰</h2>
            <p className="section__lead">
              진찰에서 확인한 원인에 따라 아래 치료를 조합합니다. 모든 환자에게
              같은 치료를 적용하지 않습니다.
            </p>
          </div>

          <div className="grid grid--3">
            {treatments.map((t) => (
              <div className="card" key={t.name}>
                <h3 className="treat__name">{t.name}</h3>
                <p className="treat__body">{t.body}</p>
              </div>
            ))}
          </div>

          {/* [위험도: 하] 비급여 안내. 가격 표기는 별도 고지 규정이 있어 넣지 않았습니다 */}
          <p className="note">
            치료 항목과 횟수는 진찰 결과에 따라 달라지며, 일부 항목은 비급여
            진료입니다. 자세한 사항은 진료 시 안내해 드립니다.
          </p>
        </div>
      </section>

      {/* ===== 진료 안내 ===== */}
      <section className="section section--tint" id="info">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">진료 안내</span>
            <h2 className="section__title">오시는 길</h2>
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
