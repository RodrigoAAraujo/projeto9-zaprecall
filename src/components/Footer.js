import { useState } from "react"
import styled from "styled-components"

import wrongCheck from "../img/close-circle-icon.js"
import middleCheck from "../img/help-circle-icon.js"
import rigthCheck from "../img/checkmark-circle-icon.js"


export default function Footer({reviews, counter}) {

    return (
        <FooterStyle>
            <h2 data-identifier="flashcard-counter">{counter}/{reviews.length} CONCLUÍDOS</h2>
            <div>   
                {reviews.map((i, index)=>
                    <QuestionIcon review = {i} key={index}/>
                )}
            </div>
        </FooterStyle>
    )
}

function QuestionIcon({review}){
    const [reviewStatus, setReview] = useState(review)

    function defineImage(){
        switch(review){
            case 1:
                return wrongCheck
            case 2:
                return middleCheck
            case 3:
                return rigthCheck
        }
    }

    return(
        <>
            {(reviewStatus !== review)?defineImage():<ion-icon name="remove-circle"></ion-icon>}
        </>
    )
}


const FooterStyle = styled.div`

    position: fixed;
    bottom: 0; left: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    height: 100px;
    padding: 14px 10px;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Recursive', sans-serif;;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    ion-icon{
        font-size: 24px;
        color: #d3d3d3;
    }
    div{
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 200px;
    }
`

