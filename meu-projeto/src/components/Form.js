import{useState} from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log("Cadastrou o usuário")
    }

const [name, setName] = useState()

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input name="password" id="password" type="password" placeholder="Digite sua senha"></input>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form