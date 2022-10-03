import styled from "styled-components"

export default function FinishScreen({achievement, change, zaps}){

 
    if(zaps >= achievement){
        return(
            <Container>
                <FinishBlock>   
                    <h1>
                        Parabéns!!
                    </h1>
                    <button onClick={() =>change(1)}>Voltar para a tela inicial</button>
                </FinishBlock>
            </Container>
        )
    }else{
        return(
            <Container>
                <FinishBlock>
                    <h1>
                        Puts, não foi desta vez!!
                    </h1>
                    <button onClick={() => change(1)}>Voltar para a tela inicial</button>
                </FinishBlock>
            </Container>
        )
    }
}

const Container = styled.div`
    z-index: 3;
    background-color: rgba(215,9,0, 0.8);
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

const FinishBlock = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    z-index: 3;

    max-width:300px;
    height: 130px;
    width:80%;
    height: 50%;
    background-color: white;

    h1{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;

    }
    
    button{
        margin-top: 25px;
        width: 100%;
        border-radius: 5px;
        padding: 16px 20px;
        background-color: #d3d3d3;
        color: #505459;
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;

        &:hover {
            filter: brightness(0.9);
            cursor: pointer;
        }
    }
`