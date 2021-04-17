import StefaniniElements from '../elements/StefaniniElements'
const stefaniniElements = new StefaniniElements

let primeiroNome = "Heliton"
let nomeValido =  primeiroNome + ' assis'
let emailValido = nomeValido + '@gmail.com'
let emailInvalido = nomeValido + '@gmail'
let senhaValida = 'Stefanini123*'
let senhaInvalida = '123'
let usuario2 = "Luciana Lima"
let email2 = "lucianalima@gmail.com"
let senha2 = "Stefanini1234"

 class StefaniniPage {
    acessarSite() {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
    }

    inserirNome() { 
        cy.get(stefaniniElements.campoNome())
        .type(nomeValido)
    }

    inserirNomeUsuario2() { 
        cy.get(stefaniniElements.campoNome())
        .type(usuario2)
    }

    inserirPrimNome() {
        cy.get(stefaniniElements.campoNome())
            .type(primeiroNome)
    }

    inserirEmail() {
        cy.get(stefaniniElements.campoEmail())
            .type(emailValido)
    }

    inserirEmailUsuario2() {
        cy.get(stefaniniElements.campoEmail())
            .type(email2)
    }

    inserirEmailInvalido() {
        cy.get(stefaniniElements.campoEmail())
            .type(emailInvalido)
    }

    inserirSenha() {
        cy.get(stefaniniElements.campoSenha())
            .type(senhaValida)
    }

    inserirSenhaUsuario2() {
        cy.get(stefaniniElements.campoSenha())
            .type(senha2)
    }

    inserirSenhaInvalida() {
        cy.get(stefaniniElements.campoSenha())
            .type(senhaInvalida)
    }

    excluirPrimeiroUsuario() {
        cy.get(stefaniniElements.removUsuario1())
            .click()
    }
 
    buttonCadastrar() {
        cy.get(stefaniniElements.btnCad())
            .click();
    }

    sucessoNoCadastrado() {
        cy.get(stefaniniElements.tabelaEVisivel())
            .should('be.exist')
    }

   
    erroCadSemNome() {
        cy.get(stefaniniElements.msgCampoNomeVazio())
            .should('be.visible')
            .contains('O campo Nome é obrigatório')
    }

    erroCadSemEmail() {
        cy.get(stefaniniElements.msgCampoEmailVazio())
            .should('be.visible')
            .contains('O campo E-mail é obrigatório.')
    }

    erroCadSemSenha() {
        cy.get(stefaniniElements.msgCampoSenhaVazio())
            .should('be.visible')
            .contains('O campo Senha é obrigatório.')
    }

    erroInsiraNomeCompleto() {
        cy.get(stefaniniElements.msgCampoNomeVazio())
            .should('be.visible')
            .contains('Por favor, insira um nome completo.')
    }

    erroEmailInvalido() {
        cy.get(stefaniniElements.msgCampoEmailVazio())
            .should('be.visible')
            .contains('Por favor, insira um e-mail válido.')
    }

    erroSenhaInvalida() {
        cy.get(stefaniniElements.msgCampoSenhaVazio())
            .should('be.visible')
            .contains('A senha deve conter ao menos 8 caracteres')
    }

    deletarUsuario1() {
        cy.get(stefaniniElements.removUsuario1())
        .click()
    }

    validarIdUsuario2() {
        cy.get(stefaniniElements.idUsuario2())
        .should('contain',"2")
    }
}


export default StefaniniPage;
