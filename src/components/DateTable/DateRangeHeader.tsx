interface DateRangeHeaderProps {
  startDate: string;
  endDate: string;
  onPrevious: () => void;
  onNext: () => void;
}

const DateRangeHeader: React.FC<DateRangeHeaderProps> = ({
  startDate,
  endDate,
  onPrevious,
  onNext,
}) => {
  const formatDateRange = (start: string, end: string) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);

    return `${startDateObj.getDate()} December ${startDateObj.getFullYear()} - ${endDateObj.getDate()} December ${endDateObj.getFullYear()}`;
  };

  return (
    <div className="mb-4 flex items-center justify-between rounded border bg-gray-100 px-4 py-2">
      <button onClick={onPrevious} className="text-gray-600 hover:text-gray-800">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <span className="text-sm font-medium">{formatDateRange(startDate, endDate)}</span>

      <button onClick={onNext} className="text-gray-600 hover:text-gray-800">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default DateRangeHeader;
