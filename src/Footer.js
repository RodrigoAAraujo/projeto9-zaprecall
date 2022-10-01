import { useState } from "react"
import styled from "styled-components"

export default function Footer({ reviews }) {
    const [contador, setContador] = useState(0)

    function verifyComplete() {
        reviews.forEach((e) => (e != 0) ? setContador(contador + 1) : null)
        return contador
    }

    return (
        <FooterStyle>
            <h2>{verifyComplete()}/{reviews.length} Concluídos</h2>
            <div>
                

            </div>
        </FooterStyle>
    )
}

function QuestionIcon(){
    
}
const FooterStyle = styled.footer`

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 14px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
   
`