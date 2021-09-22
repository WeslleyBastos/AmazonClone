import styled from "styled-components";

export const MainContainer = styled.div`

    .nav{
        background-color: var(--dark-blue);
        width: 100vw;
        height: 8vh;
        margin-bottom: 2rem;

    }
`
export const ProdContainer = styled.div`
      display: flex;
      justify-content: space-around;
`
export const ImgContainer = styled.div`
        width: 35vw;
        justify-content: center;
`
export const InfoContainer = styled.div`
        width: 40vw;
        background-color:var(--blue);
        margin-left: 2rem;

        .brand{
            color: var(--anchor-blue);
            font-weight: bold;
            margin: 1rem 0 0 0;
        }
    
        .indica{
            font-size:12px;
            font-weight: bold;
            text-align: center;
            width 110px;
            background-color: var(--light-blue);
            
            .first{
                color: var(--white);
            }
            span{
                color: var(--orange);
            }
        }
        .rating{
            padding: 3% 0 ;
        }
            
            .price{
                margin-top: 1rem;
                font-weight: 500;
                
                .descount{
                    span{
                        color: red;
                    }
                }
                .installment{
                    font-weight: bold;
                    margin-top:1rem;
                }
            }

            .d-icons{
                display:flex;
                width: 32vw;
                margin: 3rem 0 2rem 0;

                p{
                    font-weight:bold;
                    color:var(--anchor-blue)
                }

            }

            .description{
                margin-top: 1rem;
                width: 30vw; 
            }
`
export const OrderContainer = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 1.2em;
    flex-direction: column;
    width: 25vw;
    margin-right:2rem;
    border: solid 1px var(--gray);
    

    .order-price{
        color: red;
        margin: 2rem 0 1rem 1rem;

    }
    .order-installment{
        margin: 1rem 0 2rem 1rem;
    }
    .frete{
        margin: 0rem 0 2rem 1rem;
        span{
            color: var(--anchor-blue);
            margin: 1rem 0 2rem 0rem;
        }
    }
    .stock{
        color: var(--green);
        margin: 1rem 0 2rem 1rem;
        text-transform: uppercase;
        font-weight: bolder;
    }
    .quantity{
        margin: 1rem 0 2rem 1rem;
    }

    .addToCart{
        width:250px;
        height: 50px;
        border-radius: 25px;
        padding: 2%;
        font-size:1em;
        margin: 1rem 0 1rem 2rem;
        background-color: var(--yellow);
    }
    .addToFavorites{
        width:250px;
        height: 50px;
        border-radius: 25px;
        padding: 2%;
        font-size:1em;
        margin: 1rem 0 1rem 2rem;
        background-color: var(--orange);
    }
`