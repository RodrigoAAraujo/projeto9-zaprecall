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
                        question = {q}
                        setQuestion = {setCards}
                    />
                )}
            </main>

            <Footer reviews={cards.map((i)=> i.review)}/>
        </Deck>
    )
}

const Deck = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    
    display: flex;
    flex-direction: column;
    background-color: var(--cor-fundo);
    

    header {
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
        width: 80%;
        margin: 10px auto;
        max-height: 400px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        &::-webkit-scrollbar {
            display: none;
        }
    }

`