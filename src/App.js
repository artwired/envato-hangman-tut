import Gameboard from "./Gameboard"

function App() {
    return (
    <>
    <h1>Welcome to Hangman!</h1>
    <p>Would you like to play?</p>
    <div>
        <Gameboard secretWord="TutsPlus" />
    </div>
    </>
    )
}
export default App