const Habit = () => {
  return <div>habit</div>;
};

export default Habit;

// 정보
//  - 이름 / 설명 / 시작일 / 종료일 / 남은 일자
//  - 현재까지 요약 (총 몇일 중 몇일 성공 몇일 실패)
//  - 수정 가능 (이름, 설명만)
// 현황
//  - 일자별 완료 현황 -> 기본이 미완 -> 클릭 -> 스킵 -> 클릭 -> 완료
//  - 시작일 종료일은 다른 디자인

// 1. Detail
// - Basic_Info
// - Ongoing_summary
// 2. Status
// - Status_List
// - Status_Item (Default = Not Done / Success / Skipped )
