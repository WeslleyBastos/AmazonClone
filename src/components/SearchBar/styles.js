import styled from "styled-components";

export const InputStyle = styled.input`
    background-color: var(--white);
    width:70vw;
    height: 6vh;
    margin:1% 2% 0 -2%;

    ::placeholder{
        text-align: center;
        font-size: 20px;
        margin-top: 2%;
    }
    
`
export const SearchBox = styled.div`
    display: flex;

    .click-to-search{
        background-color:var(--orange);
        width: 52px;
        height: 39px;
        margin: 9px 0px 0px -70px;
    }
    svg{
        width: 40px;
        height: 20px;
        margin: 8px 0 0 0;
        color: white;
    }

`