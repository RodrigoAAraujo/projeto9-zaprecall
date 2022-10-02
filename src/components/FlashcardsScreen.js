import { useEffect, useState } from "react"
import styled from "styled-components"
import LogoMainScreen from "../img/logo.png"
import Footer from "./Footer.js"
import FlashCard from "./Flashcard.js"


export default function FlashCardsScreen({ screenOn, changeScreen, deck, goal }) {

    const [cardsStatus, setCards] = useState(deck)

    return (
        <Deck on={screenOn}>
            <header>
                <img src={LogoMainScreen} />
                <h1>ZapRecall</h1>
            </header>

            <main>
                {cardsStatus.cards.map((q) =>
                    <FlashCard
                        allQuestions={cardsStatus.cards}
                        question={q}
                        setQuestion={setCards}
                        key={q.id}
                    />
                )}
            </main>

            <Footer reviews={cardsStatus.cards.map((i) => i.review)} />
        </Deck>
    )

}

const Deck = styled.div`    
    display: flex;
    flex-direction: column;
    background-color: var(--cor-fundo);

    backface-visibility: hidden;
    transform: ${props => props.on == 2 ? "rotateY(0deg)" : "rotateY(180deg)"};
    transition: 1s all;
    

    header {
        position: static;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        color: white;
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
        max-width: 600px;
        width: 100%;
        margin: 0px auto;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;

        &::-webkit-scrollbar {
            display: none;
        }
    }

`