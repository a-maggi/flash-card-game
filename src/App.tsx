import { useEffect, useMemo, useState } from "react";
import useSound from "use-sound";
import CardGrid from "./components/CardGrid";
import Header from "./components/Header";
import { getRandomNumbers, shuffleArray } from "./utils";
import useStickyState from "./hooks/useStickyState";
import Dialog from "./components/Dialog/Dialog";
import Button from "./components/Button";

const App = () => {
    const [hasStarted, setHasStarted] = useState(false);
    const [cardsFlipped, setCardsFlipped] = useState<number[]>([]);
    const [activeCards, setActiveCards] = useState<number[]>([]);
    const [resetTrigger, setResetTrigger] = useState(0);
    const [showDialog, setShowDialog] = useState(false);
    const [soundEnabled, setSoundEnabled] = useStickyState(true, "soundEnabled");
    const [click] = useSound("/sounds/click.wav", { volume: 0.75 });
    const [flip] = useSound("/sounds/flip.wav", { volume: 0.75 });
    const [win] = useSound("/sounds/win.mp3", { volume: 0.75 });

    useEffect(() => {
        if (activeCards.length > 0 && !hasStarted) {
            setHasStarted(true);
        }
    }, [activeCards.length, hasStarted]);

    const cardIndices = useMemo(() => {
        const numbers = getRandomNumbers(6, 1, 19).reduce<number[]>((acc, curr) => [...acc, curr, curr], []);
        shuffleArray(numbers);
        return numbers;
    }, [resetTrigger]);

    useEffect(() => {
        if (cardsFlipped.length === cardIndices.length) {
            setShowDialog(true);
            setHasStarted(false);
            if (soundEnabled) win();
        }
    }, [cardIndices.length, cardsFlipped.length, soundEnabled, win]);

    const handleCardClick = (index: number) => {
        if (activeCards.length === 2) return;
        if (soundEnabled) click();
        if (activeCards.length === 0) {
            setActiveCards([index]);
        } else if (activeCards.length === 1) {
            const cardIndex = activeCards[0];
            if (cardIndices[cardIndex] === cardIndices[index]) {
                setActiveCards([]);
                setCardsFlipped((prev) => [...prev, cardIndex, index]);
            } else {
                setActiveCards([...activeCards, index]);
                setTimeout(() => {
                    setActiveCards([]);
                    if (soundEnabled) flip();
                }, 500); // Hide both cards after a delay if they don't match
            }
        }
    };

    const handleReset = () => {
        setHasStarted(false);
        setCardsFlipped([]);
        setActiveCards([]);
        setResetTrigger((current) => current + 1);
        setShowDialog(false);
    };

    const handleSoundToggle = () => {
        setSoundEnabled(!soundEnabled);
    };

    return (
        <>
            <Header
                hasStarted={hasStarted}
                handleReset={handleReset}
                soundEnabled={soundEnabled}
                handleSoundToggle={handleSoundToggle}
            />
            <main>
                <CardGrid
                    cardIndices={cardIndices}
                    cardsFlipped={cardsFlipped}
                    activeCards={activeCards}
                    handleCardClick={handleCardClick}
                />
            </main>

            <Dialog title="Congratulations!" isOpen={showDialog} onClose={() => setShowDialog(false)}>
                <p>You've matched all the cards!</p>
                <Button onClick={handleReset}>Play again</Button>
            </Dialog>
        </>
    );
};

export default App;
