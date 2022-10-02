import React, { useState } from "react";

import FlashCardsScreen from "./components/FlashcardsScreen.js"
import InitialScreen from "./components/InitialScreen.js"
import GlobalStyle from "./GlobalStyle";


export default function App() {
    const [screen, setScreen] = useState(1)
    const [deckChosen, setDeck] = useState(null)
    const [goalNumber, setGoal] = useState(null)


    if(screen === 1){
        return (
            <>
                <GlobalStyle />
                <InitialScreen
                    screenOn={screen}
                    changeScreen={setScreen}
                    chooseDecks={setDeck}
                    goal={setGoal}
                />
            </>
        )
    }else if(screen === 2){
        return(
            <>
                <GlobalStyle />
                <FlashCardsScreen
                screenOn={screen}
                changeScreen={setScreen}
                deck={deckChosen}
                goal={goalNumber}
                />
            </>
        )
    }
}
