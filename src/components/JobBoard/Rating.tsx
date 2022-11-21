import { FC, useMemo, useState } from "react";
import { starFilled, starStroke } from "../../assets";

interface RatingProps {
  rating: number;
  onRating: (idx: number) => void;
}

const Rating: FC<RatingProps> = ({ rating, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getIcon = (index: number): string => {
    if (hoverRating >= index) {
      return starFilled;
    } else if (!hoverRating && rating >= index) {
      return starFilled;
    } else {
      return starStroke;
    }
  };

  const starRating = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => {
        return (
          <img
            aria-label="star"
            className="ss:w-[19px] ss:h-[18px] w-[10px] h-[10px] cursor-pointer"
            alt=""
            src={getIcon(idx)}
            key={idx}
            onClick={() => onRating(idx)}
            onMouseEnter={() => setHoverRating(idx)}
            onMouseLeave={() => setHoverRating(0)}
          />
        );
      });
  }, [rating, getIcon, onRating]);

  return <div className="flex flex-row mx-6 items-center">{starRating}</div>;
};

export default Rating;
