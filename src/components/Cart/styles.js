import styled from "styled-components"

export const ContainerItemsCart = styled.main `
    display: flex;
    flex-direction: column;
   
   
`

export const ContainerCart = styled.div `
    display: flex;
    background-color: lightgray;
    height: 100vh;

    .container-items {
        margin: 2% 5%;
        width: 65vw;
        height: 55vh;
        box-shadow: 0 0 3pt 1pt rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-evenly;
        background-color: #fff;
        padding-top: 2rem;
        flex-wrap: wrap;
        
        .cart-buy {
            position: absolute;
            top: 22%;
            left: 100px;
            font-weight: 550;
            font-size: 1.8rem;
            color: #222;
        }

        .hr-separator-two {
            border: 1px solid lightgray;
            height: 0px;
            width: 100%;
            margin-top: 30px;
        }
           
        .hr-separator {
            border: 1px solid lightgray;
            height: 0px;
            width: 100%;
            position: relative; 
            top: -25%;
        }

        .subtotal {
            position: relative;
            top: -26%;
            margin-left: auto;
            margin-right: 10px;
            font-weight: 500;
            font-size: 1.2rem;

            span {
                font-weight: bold;
                font-size: 1.1rem;
            }
        }

        img {
            width: 240px;
            height: 132px;
        }

        h1, h2 {
            font-weight: bold;
        }
    }

    .info-prod {
        display: flex;
        justify-content: space-between;
        width: 100%;

        img {
            height: 25px;
            width: 140px;
            margin-left: 5rem;
            position: relative;
            top: -190%;
            left: 25%;
        }

        p {
            position: relative;
            top: -190%;
            left: -1%;
            font-size: 0.9rem;
            color: gray;
            text-align: center;
        }
    }
    
    .h3 {
        position: relative;
        top: -105px;
        left: -95px;
    }

    .container-controll {
        margin: 10px;

        button {
            width: 22px;
            color: #000;
            border-radius: 5px;
            height: 26px;
            background-color: transparent;
        }

        button:nth-child(1) {
            border: 2.5px solid red;
        }

        button:nth-child(3) {
            border: 2.5px solid green;

        }

        span {
            font-size: 0.9rem;
            margin: 0.5rem;
        }
    }

    .sub-frete {
        width: 25vw;
        height: 35vh;
        box-shadow: 0 0 3pt 1pt rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        border: 1.5px solid lightgray;
        justify-content: center;
        align-items: center;
        margin: 25px;
        gap: 1rem;
        text-align: center;
        background-color: #fff;

        h2 {
            font-size: 1.4rem;
        }


        .verificado-text {
            display: flex;
        }

        img {
            height: 20px;
            width: 20px;
            margin-left: 7px;
        }

        .bold-span {
            font-weight: bold;
        }

        .span-parent {
            color: #222;
            font-weight: 300;

            span {
                color: #00DF76;
            }
        }

        .input-span {
            display: flex;
            flex-direction: row;

            span {
                display: block;
                margin-top: -0.25rem;
                margin-left: 0.5rem;
            }
        }

        .btn {
            width: 85%;
            background-color: #FFD809;
            color: #000;
            text-align: center;
            height: 2.01rem;
            line-height: 2rem;
            border-radius: 6px;
        }
        
        .btn button {
            font-weight: bold;
        }
    }
`