import LetterGrid from "./LetterGrid";

const Gameboard = ({secretWord}) => {
    return ( 
        <div>
            <LetterGrid 
                secretWord={secretWord}
                guessedLetters={['t']}
            />
        </div>
     );
}
 
export default Gameboard;