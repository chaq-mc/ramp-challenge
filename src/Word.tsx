import { useState, useEffect } from "react";

type WordProps = {
    word: string;
};

const Word = (props: WordProps) => {

    const [displayWord, setDisplayWord] = useState<string[]>([]);
    const [tempWord, setTempWord] = useState(props.word.split(""));
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (tempWord.length !== 0) {
                
                setDisplayWord([...displayWord, tempWord[0]]);
                setTempWord(tempWord.slice(1));
            }
        }, 500);
        return () => clearInterval(interval);
    },[displayWord])

return (
    <ul>
        {displayWord.map((letter, i) => {
            return (
                <li key={i}>{letter}</li>
            )
        })}
    </ul>
)
}

export default Word;