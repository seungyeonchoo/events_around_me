interface DiaryNoteButtonsProps {
  editToggle: boolean;
  handleEditToggle: () => void;
  handlePostDiary: () => void;
  handleDeleteDiary: () => void;
}

const DiaryNoteButtons = ({
  handleEditToggle,
  handlePostDiary,
  handleDeleteDiary,
  editToggle,
}: DiaryNoteButtonsProps) => {
  const handleSaveDiary = () => {
    handlePostDiary();
    handleEditToggle();
  };
  return (
    <div
      className="flex items-center mx-[0.5rem] text-[0.75rem] font-bold text-secondary
    "
    >
      {editToggle && (
        <button className="px-[0.1rem] mx-[0.5rem]" onClick={handleDeleteDiary}>
          초기화
        </button>
      )}
      <button
        className="px-[0.1rem] mx-[0.5rem]"
        onClick={editToggle ? handleSaveDiary : handleEditToggle}
      >
        {editToggle ? '저장' : '작성'}
      </button>
    </div>
  );
};

export default DiaryNoteButtons;
