import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import logoAmazon from "../../assets/amazon-logo.svg"
import { Container, Footer, Form, Header } from "./styles";
import { Link } from "react-router-dom"

export const Login = () => {

    const formSchema = yup.object().shape({
        email: yup.string().email("Campo inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório"),
        KeepMeConnected: yup.boolean().oneOf([true], "Você Deve aceitar os termos.")

    })

    const { handleSubmit, register } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubFunc = (data) => {
        console.log(data)
    }


    return (
        <Container>
           <Header>
               <img src={logoAmazon} alt="LOGO-AMAZON" />
           </Header> 

            <Form onSubmit={handleSubmit(onSubFunc)}>
                <h1>Login</h1>

                <label>E-mail</label>
                <input type="text" {...register("email")} />

                <label>Senha</label>
                <input type="text" {...register("password")} />

                <div>
                    <input type="checkbox" {...register("KeepMeConnected")} />
                    <span className="span-KeepMeConnected">Mantenha-me conectado</span>
                </div>

                <div>
                    <button type="submit">Continuar</button>
                </div>
            </Form>

            <Footer>
                <span>Condições de uso</span>
                <span>Política de Privacidade</span>
                <span>Ajuda</span>
                <p>2012 - 2021, Amazon.com, Inc. ou suas afiliadas</p> 
            </Footer>
        </Container>
    )
}