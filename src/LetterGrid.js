import Letter from "./Letter";
const LetterGrid = ({secretWord, guessedLetters}) => {
    let letters = secretWord.split('').map((letter, index) => {

        // LOCAL VARIABLES
        let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1

        return (
            <Letter 
                value={letter} 
                isShown={isShown}
                key={index}
            />
    )})
    return ( 
        <div>
            {letters}
        </div>
     );
}
 
export default LetterGrid;