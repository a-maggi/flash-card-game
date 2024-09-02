import Card from "../Card";
import { IconProps } from "../Icon/Icon";
import "./styles.css";

export interface CardGridProps {
    cardIndices: number[];
    cardsFlipped: number[];
    activeCards: number[];
    handleCardClick: (index: number) => void;
}

export const CardGrid: React.FC<CardGridProps> = (props) => {
    const { cardIndices, cardsFlipped, activeCards, handleCardClick } = props;
    return (
        <div className="card-grid container">
            {cardIndices.map((number, i) => (
                <Card
                    key={`${number}-${i}`}
                    icon={`Emoji${number}` as IconProps["name"]}
                    isActive={cardsFlipped.includes(i) || activeCards.includes(i)}
                    onClick={() => handleCardClick(i)}
                />
            ))}
        </div>
    );
};

export default CardGrid;
