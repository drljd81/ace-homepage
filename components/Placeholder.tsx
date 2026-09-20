/**
 * 사진 자리표시.
 * 실제 사진이 준비되면 이 컴포넌트를 <img src="/images/파일명.jpg" ... /> 로 교체하세요.
 * (사진 파일은 public/images/ 폴더에 넣으면 됩니다.)
 */
export default function Placeholder({
  label,
  hint,
  ratio = "4 / 3",
  minHeight,
}: {
  label: string;
  hint?: string;
  ratio?: string;
  minHeight?: number;
}) {
  return (
    <div
      className="ph"
      style={{ aspectRatio: minHeight ? undefined : ratio, minHeight }}
    >
      <span className="ph__label">📷 {label}</span>
      {hint ? <span className="ph__hint">{hint}</span> : null}
    </div>
  );
}
