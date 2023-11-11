interface DiaryNoteHeaderProps {
  year: string;
  month: string;
  date: string;
  day: string;
}

const DiaryNoteHeader = ({ year, month, date, day }: DiaryNoteHeaderProps) => {
  return (
    <h2 className="text-secondary">
      <p className="text-[0.75rem]">{`${year} ${month}`}</p>
      <p className="text-[1.25rem] font-bold">{`${date} ${day}`}</p>
    </h2>
  );
};

export default DiaryNoteHeader;
