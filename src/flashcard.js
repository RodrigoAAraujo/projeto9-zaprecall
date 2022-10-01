import { useState } from "react"
import styled from "styled-components"



export default function FlashCard({question, setQuestion}) {
    const [status, setStatus] = useState(0)

    function sumStatus() {
        console.log("asbou")
        setStatus(status + 1)
    }

    return (
        <FlashBlock>
            <Answer status={status}>
                <p>{question.answer}</p>
                <section>
                    <button className="error">Não lembrei</button>
                    <button className="almost">Quase lembrei</button>
                    <button className="zap">Zap!</button>
                </section>
            </Answer>
            <QuestionPreview status={status}>
                <h1>
                    Pergunta {question.id}
                </h1>
                <ion-icon
                    name="play-outline"
                    onClick={sumStatus}
                ></ion-icon>
            </QuestionPreview>

            <QuestionBlock status={status}>
                <p>{question.question}</p>
                <ion-icon
                    name="refresh-outline"
                    onClick={sumStatus}
                ></ion-icon>
            </QuestionBlock>
        </FlashBlock>
    )

}


const FlashBlock = styled.div`
    position: relative;
    margin: 20px 0px;
    height: auto;
`

const QuestionPreview = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    padding: 20px 10px;
    width: 300px;
    height: 65px;
    
    cursor: pointer;
    font-family: 'Recursive', cursive;
    backface-visibility: hidden;
    transition: all 1.0s;
    transform: ${props => props.status === 0 ? "rotateX(0deg)" : "rotateX(180deg)"};

    h1{
        font-family: 'Recursive', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
    }
    

   .acerto {
    color: var(--cor-zap);
    text-decoration: line-through;
    }

   .help {
    color: var(--cor-quase-nao-lembrei);
    text-decoration: line-through;
    }

   .erro {
    color: var(--cor-nao-lembrei);
    text-decoration: line-through;
    }

`

const QuestionBlock = styled.div`
    position: absolute;
    top: 0; left: 0;
    border-radius: 5px;
    padding: 20px 10px;
    width: 300px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--cor-fundo-card);
    backface-visibility: hidden;
    transform: ${props => props.status === 1 ? "rotateX(0deg)" : "rotateX(180deg)"};
    transition: all 1.0s;
`

const Answer = styled.div`

    position: absolute;
    top: 0; left: 0;
    width: 100%;
    border-radius: 5px;
    background-color: var(--cor-fundo-card);
    cursor: default;
    padding: 20px 10px;
    transform: ${props => props.status === 2 ? "rotateX(0deg)" : "rotateX(180deg)"};
    backface-visibility: hidden;
    transition: all 1.0s;

    
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

