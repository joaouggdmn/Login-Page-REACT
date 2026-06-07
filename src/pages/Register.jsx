function Register(){
    return(
        <div>
            <h1>Cadastro</h1>
            <form>
                <label>
                    Nome completo:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Senha:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
export default Register