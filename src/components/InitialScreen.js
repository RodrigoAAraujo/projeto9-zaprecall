import styled from "styled-components"
import LogoImage from "../img/logo.png"
import DECKS from "../DECKS.js";
import { useState } from "react";

export default function InitialScreen({screenOn, changeScreen, chooseDecks, goal}){

    const [stage, setStage] = useState(0)
    const [inputName, setInput] = useState(DECKS[0].name)

    //To be sent
    const [inputGoal, setGoal] = useState(0)
    const [chosenDeck, setChosenDeck] = useState(null)


    function chooseDecksInternally(){
        for(let i = 0; i < DECKS.length ; i++){
            if (DECKS[i].name === inputName){
                setChosenDeck(DECKS[i])
            }
        }
        upStage()
    }

    function upStage(){
        setStage(stage + 1)
    }

    function switchScreen(){
        chooseDecks(chosenDeck)
        goal(inputGoal)
        changeScreen(2)
    }


    return(
        <Initial on={screenOn}>
            <Container>
                <Logo>
                    <img src={LogoImage}/>
                    <h1>ZapRecall</h1>
                </Logo>
                <InputArea>
                    {(stage===0)? <button onClick={() => upStage()} data-identifier="start-btn">Escolher Deck!</button>:
                    (stage === 1)? 
                    <>
                        <select onChange={(e)=> setInput(e.target.value)} data-identifier="deck-selector">
                            {DECKS.map((e)=> <option data-identifier="deck-option">{e.name}</option>)}
                        </select>
                        <button onClick={() => chooseDecksInternally()} data-identifier="start-btn">Escolher as metas!</button>
                    </>:
                    <>
                        <select onChange={(e)=> setGoal(e.target.value)} data-identifier="goals-input">
                            {chosenDeck.cards.map((e)=> <option>{e.id}</option>)}
                        </select>
                        <button onClick={() => switchScreen()} data-identifier="start-btn">Iniciar Recall!</button>
                    </>}
                </InputArea>
            </Container>
        </Initial>
    )
}

const Initial = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--cor-fundo);;
`
const Container = styled.div`
    margin: auto;
    max-width: 400px;
    width: 100%;
`

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width:130px
    }
    h1{
        font-family: 'Righteous', cursive;
        font-size: 36px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: -0.012em;
        text-align: center;
        color: #ffffff;
        margin-top: 20px;
    }
`

const InputArea = styled.div`
    width:80%;
    margin: 30px auto 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    button{
        width: 100%;
        border-radius: 5px;
        padding: 16px 20px;
        background-color: #ffffff;
        color: #D70900;
        border: 1px solid #D70900;
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        cursor: pointer;
    }
    select{
        margin: 10px 0px 15px;
        width: 100%;
        border-radius: 5px;
        padding: 16px 4px;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: #D70900;
        letter-spacing: 0em;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
    }
`