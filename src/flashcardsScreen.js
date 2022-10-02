import { useState } from "react"
import styled from "styled-components"
import LogoMainScreen from "./img/logo.png"
import Footer from "./Footer.js"
import FlashCard from "./flashcard.js"


export default function FlashCardsScreen(){
    const cards = [
        {id:1, question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", review: 0},
        {id:2, question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", review: 0},
        {id:3, question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", review: 0},
        {id:4, question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", review: 0},
        {id:5, question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", review: 0},
        {id:6, question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", review: 0},
        {id:7, question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", review: 0},
        {id:8, question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", review: 0},
    ]

    const [cardsStatus, setCards] = useState(cards)

    return(
        <Deck>
            <header>
                <img src={LogoMainScreen}/>
                <h1>ZapRecall</h1>
            </header>

            <main>
                {cardsStatus.map((q)=> 
                    <FlashCard 
                        allQuestions = {cardsStatus}
                        question = {q}
                        setQuestion = {setCards}
                        key={q.id}
                    />
                )}
            </main>

            <Footer reviews={cardsStatus.map((i)=> i.review)}/>
        </Deck>
    )
}

const Deck = styled.div`    
    display: flex;
    flex-direction: column;
    background-color: var(--cor-fundo);
    

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