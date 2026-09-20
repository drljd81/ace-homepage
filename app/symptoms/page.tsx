import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import { site } from "@/lib/site";

/* ============================================================================
   증상과 치료 (증상 상세 페이지)
   ※ 주석의 [위험도: 상/중/하] 는 의료광고 관련 검토 표시입니다.
     자세한 근거와 대안 문구는 docs/문구-위험도-검토.md 를 보세요.
   ========================================================================== */

export const metadata: Metadata = {
  title: "증상과 치료",
  description:
    "허리 통증, 무릎·어깨 관절, 반복되는 두통·이명·어지럼, 팔다리 저림. 전신 촉진으로 원인을 찾아 재생주사·도수치료·체외충격파와 개별화 재활로 치료합니다.",
};

const anchors = [
  { id: "back", label: "허리 통증" },
  { id: "joint", label: "무릎·어깨 관절" },
  { id: "ccj", label: "두통·이명·어지럼" },
  { id: "numbness", label: "팔·다리 저림" },
];

const steps = [
  {
    no: "01",
    title: "전신 촉진",
    body: "아픈 곳만 보지 않습니다. 목에서 골반, 발까지 손으로 짚어 가며 몸 전체의 균형과 긴장 상태를 확인합니다.",
  },
  {
    no: "02",
    title: "원인 판단",
    body: "촉진에서 얻은 정보와 검사 결과를 함께 놓고, 지금의 증상을 만들어 낸 자리가 어디인지 판단합니다.",
  },
  {
    no: "03",
    title: "치료",
    body: "원인에 따라 재생주사·도수치료·체외충격파를 선택하고 조합합니다. 수술이 아닌 방법으로 접근합니다.",
  },
  {
    no: "04",
    title: "개별화 재활",
    body: "같은 진단이라도 생활과 몸 쓰는 방식이 다릅니다. 그 사람에게 맞는 재활 훈련으로 마무리합니다.",
  },
];

export default function SymptomsPage() {
  return (
    <>
      {/* ===== 페이지 머리 ===== */}
      <section className="pagehead">
        <div className="container">
          <span className="section__eyebrow">증상과 치료</span>
          <h1 className="pagehead__title">
            같은 이름의 증상이라도,
            <br />
            시작된 자리는 사람마다 다릅니다
          </h1>
          <p className="pagehead__lead">
            서울에이스정형외과의원은 통증이 있는 부위만 보지 않습니다. 전신
            촉진으로 몸 전체의 균형을 확인하고, 그 증상이 어디에서 비롯되었는지
            찾는 것에서 진료를 시작합니다.
          </p>
        </div>
      </section>

      {/* ===== 증상 바로가기 ===== */}
      <nav className="anchors">
        <div className="container anchors__inner">
          {anchors.map((a) => (
            <a key={a.id} href={`#${a.id}`}>
              {a.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ===== 진료 원칙 ===== */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">진료 원칙</span>
            <h2 className="section__title">
              증상을 조절하기 전에, 원인을 먼저 확인합니다
            </h2>
            {/* [위험도: 하] 원장님 원문을 그대로 살린 핵심 메시지 */}
            <p className="section__lead">
              오랫동안 재발을 겪어 온 환자분들의 경우, 그동안의 치료가 증상
              조절 자체에 초점이 맞춰져 있었던 경우가 많습니다. 증상을 일으킨
              원인까지 다루지 못하면, 같은 일이 반복됩니다. 그래서 증상 조절에
              앞서 원인을 파악하고, 치료와 재활을 개별화해서 진행하는 것이 가장
              중요한 지점이라고 생각합니다.
            </p>
          </div>

          <ol className="steps">
            {steps.map((s) => (
              <li className="steps__item" key={s.no}>
                <span className="steps__no">{s.no}</span>
                <h3 className="steps__title">{s.title}</h3>
                <p className="steps__body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== 허리 통증 ===== */}
      <section className="section section--tint" id="back">
        <div className="container symptom">
          <div className="symptom__body">
            <span className="section__eyebrow">허리 통증</span>
            <h2 className="section__title">
              쉬면 나아졌다가, 다시 돌아오는 요통
            </h2>

            <h3 className="symptom__sub">이런 경우입니다</h3>
            <ul className="ticks">
              <li>오래 앉아 있기 어렵고, 일어설 때 허리를 펴기가 힘듭니다</li>
              <li>엉치나 다리로 뻗치는 통증, 저린 느낌이 함께 옵니다</li>
              <li>치료받으면 좋아졌다가 몇 달 뒤 같은 자리가 다시 아픕니다</li>
              <li>영상 검사에서는 큰 이상이 없다는 말을 들었습니다</li>
            </ul>

            <h3 className="symptom__sub">이렇게 봅니다</h3>
            <p className="symptom__p">
              허리는 홀로 움직이지 않습니다. 골반과 고관절, 아래로는 발목까지
              이어지는 균형이 무너지면 허리의 특정 부위에 부담이 집중됩니다.
              전신 촉진으로 그 부담이 어디에서 시작되었는지 확인한 뒤, 허리
              자체와 원인이 되는 부위를 함께 다룹니다.
            </p>
          </div>

          <Placeholder
            label="허리 진료 이미지"
            hint="촉진 또는 치료 장면 / 권장 4:3"
            ratio="4 / 3"
          />
        </div>
      </section>

      {/* ===== 무릎 어깨 ===== */}
      <section className="section" id="joint">
        <div className="container symptom symptom--reverse">
          <div className="symptom__body">
            <span className="section__eyebrow">무릎 · 어깨 관절</span>
            <h2 className="section__title">
              주사를 맞아도 그때뿐인 관절 통증
            </h2>

            <h3 className="symptom__sub">이런 경우입니다</h3>
            <ul className="ticks">
              <li>계단을 내려올 때 무릎이 시큰거리고 힘이 빠집니다</li>
              <li>팔을 옆으로 올리거나 뒤로 돌릴 때 어깨가 걸립니다</li>
              <li>밤에 아파서 자다가 깹니다</li>
              <li>여러 번 주사를 맞았지만 효과가 오래가지 않습니다</li>
            </ul>

            <h3 className="symptom__sub">이렇게 봅니다</h3>
            <p className="symptom__p">
              관절의 통증은 관절 자체보다 그 관절을 잡아 주는 인대와 힘줄,
              그리고 몸의 정렬에서 비롯되는 경우가 많습니다. 손상된 조직에는
              재생주사로 접근하고, 관절에 부담을 주고 있던 자세와 움직임은
              도수치료와 재활로 함께 교정합니다.
            </p>
            {/* [위험도: 중] 수술과 비교하는 서술은 "수술을 대체한다"로 읽히지 않게 주의 */}
            <p className="symptom__p">
              다만 수술이 필요한 상태라면 그 점을 분명히 말씀드립니다. 비수술
              치료가 모든 경우에 적합한 것은 아닙니다.
            </p>
          </div>

          <Placeholder
            label="관절 진료 이미지"
            hint="무릎·어깨 진찰 또는 체외충격파 장면"
            ratio="4 / 3"
          />
        </div>
      </section>

      {/* ===== 두통 이명 어지럼 (핵심) ===== */}
      <section className="section section--dark" id="ccj">
        <div className="container">
          <div className="section__head" style={{ maxWidth: 760 }}>
            <span className="section__eyebrow">두통 · 이명 · 어지럼</span>
            <h2 className="section__title">
              검사에서는 이상이 없다는데,
              <br />
              증상은 계속될 때
            </h2>
            <p className="section__lead">
              머리가 무겁고 조이는 두통, 귀에서 나는 소리, 자세를 바꿀 때 도는
              어지럼. 여러 과를 다녀도 원인을 찾지 못했다는 분들이 적지 않게
              찾아오십니다.
            </p>
          </div>

          <div className="ccj-grid">
            <div className="ccj-card">
              <h3>어디를 보는가</h3>
              {/* [위험도: 중] "원인인 경우가 많다" → 경향 서술로 완화 */}
              <p>
                이런 증상이 반복될 때, 저희는 두개경추 접합부를 확인합니다.
                머리뼈와 첫 번째·두 번째 목뼈가 만나는 부위로, 머리의 무게를
                받치면서 가장 큰 움직임을 만들어 내는 자리입니다. 이 부위가
                불안정해지면 두통과 어지럼, 귀 증상이 함께 나타나는 경우가
                적지 않습니다.
              </p>
            </div>

            <div className="ccj-card">
              <h3>왜 잘 드러나지 않는가</h3>
              <p>
                이 부위의 불안정성은 누운 상태로 찍는 일반적인 영상 검사만으로는
                확인되지 않는 경우가 있습니다. 그래서 손으로 직접 움직임과
                긴장을 확인하는 촉진 진찰이 중요합니다.
              </p>
            </div>

            <div className="ccj-card">
              <h3>어떻게 치료하는가</h3>
              {/* [위험도: 중] 원문 "매우 쉽게 치료 가능" → 방향 서술로 완화 */}
              <p>
                불안정한 구조를 지지하는 인대와 힘줄에 재생주사로 접근하고,
                목과 어깨의 긴장은 도수치료로 다룹니다. 이후에는 이 부위를 다시
                무너뜨리지 않는 자세와 재활 훈련을 함께 익히게 됩니다. 원인이
                되는 자리를 확인하고 나면, 오래 끌어온 증상이라도 치료의 방향이
                분명해집니다.
              </p>
            </div>
          </div>

          <p className="note note--onDark">
            증상의 원인은 사람마다 다르며, 다른 질환이 원인일 수 있습니다.
            정확한 판단은 진찰을 통해 이루어집니다.
          </p>
        </div>
      </section>

      {/* ===== 팔다리 저림 ===== */}
      <section className="section" id="numbness">
        <div className="container symptom">
          <div className="symptom__body">
            <span className="section__eyebrow">팔 · 다리 저림</span>
            <h2 className="section__title">감각이 둔해지고 저린 느낌</h2>

            <h3 className="symptom__sub">이런 경우입니다</h3>
            <ul className="ticks">
              <li>손끝이나 발끝이 저리고 감각이 무뎌집니다</li>
              <li>오래 걸으면 다리가 무겁고 쉬어야 다시 걸을 수 있습니다</li>
              <li>자고 일어나면 팔이 저려 한참 털어야 합니다</li>
            </ul>

            <h3 className="symptom__sub">이렇게 봅니다</h3>
            <p className="symptom__p">
              저림은 신경이 지나가는 길 어딘가에서 눌리거나 자극받고 있다는
              신호입니다. 목이나 허리에서 시작되는 경우도 있고, 어깨나 골반,
              손목처럼 신경이 지나는 좁은 통로에서 생기는 경우도 있습니다.
              전신 촉진으로 그 지점을 좁혀 나가는 것이 먼저입니다.
            </p>
          </div>

          <Placeholder
            label="저림 진료 이미지"
            hint="신경 경로 설명 자료 또는 진찰 장면"
            ratio="4 / 3"
          />
        </div>
      </section>

      {/* ===== 마무리 ===== */}
      <section className="section section--tint">
        <div className="container cta">
          <h2 className="section__title">
            오래 반복된 증상일수록, 원인을 찾는 진찰이 필요합니다
          </h2>
          <p className="section__lead" style={{ margin: "0 auto" }}>
            증상과 그동안 받으신 치료를 정리해서 오시면 진찰에 도움이 됩니다.
            이전 병원의 영상 자료가 있다면 함께 가져와 주세요.
          </p>
          <div className="hero__actions" style={{ justifyContent: "center" }}>
            <a className="btn btn--primary" href={site.telHref}>
              전화 문의 {site.tel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
