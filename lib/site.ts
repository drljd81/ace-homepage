/**
 * 병원 기본 정보 — 이 파일만 고치면 모든 페이지에 반영됩니다.
 * ※ TODO 로 표시된 항목은 원장님 확인이 필요한 값입니다.
 */

export const site = {
  name: "서울에이스정형외과의원",
  nameEn: "Seoul Ace Orthopedics Clinic",
  director: "이정동",
  tel: "033-641-1253",
  telHref: "tel:033-641-1253",
  address: "강원도 강릉시 금성로22번길 8, 2층·3층 (금학동, 제중빌딩)",
  addressShort: "강릉시 금학동 제중빌딩 2·3층",
  naverMapUrl: "https://map.naver.com/p/search/서울에이스정형외과의원",

  /** TODO: 실제 진료시간으로 교체해 주세요. (현재는 예시값입니다) */
  hours: [
    { day: "평일", time: "09:00 - 18:00", note: "" },
    { day: "토요일", time: "09:00 - 13:00", note: "점심시간 없이 진료" },
    { day: "점심시간", time: "13:00 - 14:00", note: "평일" },
    { day: "일요일·공휴일", time: "휴진", note: "" },
  ],
} as const;

export const nav = [
  { href: "/", label: "홈" },
  { href: "/symptoms", label: "증상과 치료" },
  { href: "/about", label: "병원 소개" },
] as const;
