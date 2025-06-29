import { useState, useEffect } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isWithinInterval, addDays } from 'date-fns';

interface CalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  onDateSelect: (date: Date) => void;
  isRange?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export default function Calendar({
  startDate,
  endDate,
  onDateSelect,
  isRange = false,
  minDate = new Date(),
  maxDate = addMonths(new Date(), 12)
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(startDate || new Date());
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  useEffect(() => {
    if (startDate) {
      setCurrentMonth(startDate);
    }
  }, [startDate]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const isDateSelected = (date: Date) => {
    if (!startDate) return false;
    if (!isRange) return isSameDay(date, startDate);
    if (!endDate) return isSameDay(date, startDate);
    return isWithinInterval(date, { start: startDate, end: endDate });
  };

  const isDateInHoverRange = (date: Date) => {
    if (!isRange || !startDate || endDate || !hoverDate) return false;
    const start = startDate < hoverDate ? startDate : hoverDate;
    const end = startDate < hoverDate ? hoverDate : startDate;
    return isWithinInterval(date, { start, end });
  };

  const isDateDisabled = (date: Date) => {
    return date < minDate || date > maxDate;
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;
    onDateSelect(date);
  };

  const handleMouseEnter = (date: Date) => {
    if (isRange && startDate && !endDate) {
      setHoverDate(date);
    }
  };

  const handleMouseLeave = () => {
    setHoverDate(null);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(prev => addMonths(prev, -1))}
          className="p-2 hover:bg-gray-100 rounded-full"
          disabled={isSameMonth(currentMonth, minDate)}
        >
          ←
        </button>
        <h2 className="text-lg font-semibold">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          onClick={() => setCurrentMonth(prev => addMonths(prev, 1))}
          className="p-2 hover:bg-gray-100 rounded-full"
          disabled={isSameMonth(currentMonth, maxDate)}
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {monthDays.map((day, index) => {
          const isSelected = isDateSelected(day);
          const isHovered = isDateInHoverRange(day);
          const isDisabled = isDateDisabled(day);
          const isStart = startDate && isSameDay(day, startDate);
          const isEnd = endDate && isSameDay(day, endDate);

          return (
            <button
              key={index}
              onClick={() => handleDateClick(day)}
              onMouseEnter={() => handleMouseEnter(day)}
              onMouseLeave={handleMouseLeave}
              disabled={isDisabled}
              className={`
                p-2 text-sm rounded-lg relative
                ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-blue-50'}
                ${isSelected ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
                ${isHovered ? 'bg-blue-100' : ''}
                ${isStart ? 'rounded-r-none' : ''}
                ${isEnd ? 'rounded-l-none' : ''}
              `}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
} 