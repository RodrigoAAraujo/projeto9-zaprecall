import { useEffect, useState } from "react"

import styled from "styled-components"
import LogoMainScreen from "../img/logo.png"
import Footer from "./Footer.js"
import FlashCard from "./Flashcard.js"
import FinishScreen from "./FinishScreen.js"


export default function FlashCardsScreen({ screenOn, changeScreen, deck, goal}) {

    const [cardsStatus, setCards] = useState(deck)
    const [counter, setCounter] = useState(0)
    const [counterZapPass, setZap] = useState(0)

    function checkCounter(){
        let counterZap = 0
        let counter = 0

        cardsStatus.forEach((e)=> (e.review !== 0)? counter++: null)
        cardsStatus.forEach((e) => (e.review === 3)? counterZap++ :null)

        setZap(counterZap)
        setCounter(counter)
    }

    useEffect(() => checkCounter(), [cardsStatus])

    return (
        <Deck on={screenOn}>
            <header>
                <img src={LogoMainScreen} alt="Logo do Jogo"/>
                <h1>ZapRecall</h1>
            </header>

            <main>
                {cardsStatus.map((q) =>
                    <FlashCard
                        allQuestions={cardsStatus}
                        question={q}
                        setQuestion={setCards}
                        key={q.id}
                    />
                )}
            </main>

            <Footer reviews={cardsStatus.map((i) => i.review)} counter={counter} />

            {(counter >= cardsStatus.length)?
            <FinishScreen 
                achievement={goal} 
                change={changeScreen}
                zaps={counterZapPass}
            />
            :null}
        </Deck>
    )

}

const Deck = styled.div`    
    display: flex;
    height: 100vh;
    flex-direction: column;
    background-color: var(--cor-fundo);
 
    header {
        z-index: 2;
        position: fixed;
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: var(--cor-fundo);
        img {
            width: 52px;
            height: 60px;
            margin-right: 10px;
        }
        h1{
            font-size: 36px;
            font-weight: 600;
            font-family: 'Righteous', cursive;
        }
    }

    main{
        max-width: 1100px;
        width: 100%;
        margin: 80px auto 100px;
        overflow-y: auto;
        overflow-x: hidden;
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background-color: var(--cor-fundo);

        &::-webkit-scrollbar {
            display: none;
        }

        @media (max-width:400px){
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: nowrap;
        }
    }

`