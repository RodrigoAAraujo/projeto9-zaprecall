import { useState } from "react"
import styled from "styled-components"

import playIcon from "./img/play-outline.js"
import turnAnswer from "./img/setinha.png"

import wrongCheck from "./img/close-circle-icon.js"
import middleCheck from "./img/help-circle-icon.js"
import rigthCheck from "./img/checkmark-circle-icon.js"


export default function FlashCard({allQuestions, question, setQuestion}) {
    const [status, setStatus] = useState(0)
    const [decided, setDecided] = useState(0)

    function sumStatus() {
        if(decided === 0){
            setStatus(status + 1)
        }
    }
    
    function setReview(review){
        const pushArray = []
        allQuestions.forEach((e) => {
            if(e.id === question.id){
                pushArray.push({id: e.id, question: e.question, answer: e.answer, review: review})
            }else{
                pushArray.push(e)
            }
        });
        setQuestion(pushArray)
        setStatus(0)
        setDecided(1)
    }

    function iconAside(item){
        switch(item){
            case 0:
                return <span onClick={sumStatus}>{playIcon}</span>
            case 1:
                return wrongCheck
            case 2:
                return middleCheck
            case 3:
                return rigthCheck
        }
    }

    return (
        <FlashBlock>
            <QuestionPreview status={status} review={question.review}>
                <h1>
                    Pergunta {question.id}
                </h1>
                {iconAside(question.review)}
            </QuestionPreview>

            <QuestionBlock status={status}>
                <p>{question.question}</p>
                <img src={turnAnswer} onClick={sumStatus}/>
            </QuestionBlock>
            <Answer status={status}>
                <p>{question.answer}</p>
                <section>
                    <button className="error" onClick={() =>setReview(1)}>Não lembrei</button>
                    <button className="almost" onClick={() => setReview(2)}>Quase lembrei</button>
                    <button className="zap" onClick={() => setReview(3)}>Zap!</button>
                </section>
            </Answer>
        </FlashBlock>
    )
}


const FlashBlock = styled.div`
    position: relative;
    margin: 20px 0px;
    font-family: 'Recursive', sans-serif;

    @keyframes turning {
        from{
            transform: rotateX(180deg);
            opacity: 0;
        }
        to{
            transform: rotate(0deg);
            opacity: 1;

        }
    }
`

const QuestionPreview = styled.div`

    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    padding: 20px 10px;
    width: 300px;

    backface-visibility: hidden;

    display: ${props => props.status === 0 ? "flex" : "none"};

    animation-name: turning;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    
    color: ${props => props.review === 1 ? "var(--cor-nao-lembrei)":
             props => props.review === 2 ? "var(--cor-quase-nao-lembrei)":
             props => props.review === 3 ? "var(--cor-zap)": "black"};

    text-decoration: ${props => props.review !=0 ? "line-through": "none"};

    h1{
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
    }
    
    ion-icon{
        font-size: 23px;
    }
    span{
        cursor: pointer;
    }
`

const QuestionBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 5px;
    padding: 20px 10px;
    width: 300px;
    background-color: var(--cor-fundo-card);

    backface-visibility: hidden;

    display: ${props => props.status === 1 ? "flex" : "none"};

    animation-name: turning;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    img{
        align-self: flex-end;
        cursor: pointer;
    }
    p{
        font-weight: 400;
        font-size: 18;
        word-break: break-all;
    }
`

const Answer = styled.div`
    width: 300px;
    border-radius: 5px;
    padding: 20px 10px;
    background-color: var(--cor-fundo-card);

    backface-visibility: hidden;

    display: ${props => props.status === 2 ? "block" : "none"};
    
    animation-name: turning;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    
    section{

        margin-top: 20px;
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        gap: 10px;

        button {

            width: 100%;
            height: 40px;
            background-color: green;
            color: white;
            font-size: 12px;
            font-weight: 700;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            
            &:hover {
                filter: brightness(0.9);
                cursor: pointer;
            }
        }
        .error {
        background-color: var(--cor-nao-lembrei);
        }
        .almost {
            background-color: var(--cor-quase-nao-lembrei);
        }
        .zap {
            background-color: var(--cor-zap);
        }
    }

`

