
 class StefaniniElements {
    campoNome = () => {return 'input#name'}
    campoEmail = () => {return 'input#email'}
    campoSenha = () => {return 'input#password'}
    btnCad = () => {return 'button#register'}
    tabelaEVisivel = () => {return ' div.register-form.expanded > h2.table-title'}

    msgCampoNomeVazio = () => {return '#root > div > div > div.register-form > form > div:nth-child(1) > p'}
    msgCampoEmailVazio = () => {return '#root > div > div > div.register-form > form > div:nth-child(2) > p'}
    msgCampoSenhaVazio = () => {return '#root > div > div > div.register-form > form > div:nth-child(3) > p'}

    idUsuario2 = () => {return '#tdUserId2'}
    removUsuario1 = () => {return '#removeUser1'}
}
export default StefaniniElements;