/* global Given, Then, When */
import StefaniniPage from '../pageobjects/StefaniniPage'
const stefaniniPage = new StefaniniPage;

Given("que acesso o site da prova Stefanini", () => { 
	stefaniniPage.acessarSite();
});

When("insiro os dados", () => { 
	stefaniniPage.inserirNome();
	stefaniniPage.inserirEmail();
	stefaniniPage.inserirSenha();
});

When("insiro os dados com excecao do nome", () => { 
	stefaniniPage.inserirEmail();
	stefaniniPage.inserirSenha();
});

When("insiro os dados com excecao do email", () => { 
	stefaniniPage.inserirNome();
	stefaniniPage.inserirSenha();
});

When("insiro os dados com excecao da senha", () => { 
	stefaniniPage.inserirNome();
	stefaniniPage.inserirEmail();
});

When("insiro os dados porem apenas com o primeiro nome", () => { 
	stefaniniPage.inserirPrimNome();
	stefaniniPage.inserirEmail();
	stefaniniPage.inserirSenha();
});

When("insiro os dados porem com email invalido", () => { 
	stefaniniPage.inserirNome();
	stefaniniPage.inserirEmailInvalido();
	stefaniniPage.inserirSenha();
});

When("insiro os dados porem com senha invalida", () => { 
	stefaniniPage.inserirNome();
	stefaniniPage.inserirEmail();
	stefaniniPage.inserirSenhaInvalida();
});

And("pressiono o botao cadastro", () => { 
	stefaniniPage.buttonCadastrar();
});

Then("devo ser cadastrado com sucesso", () => { 
	stefaniniPage.sucessoNoCadastrado();
});

Then("devo receber uma mensagem de erro no campo nome", () => { 
	stefaniniPage.erroCadSemNome();
});

Then("devo receber uma mensagem de erro no campo email", () => { 
	stefaniniPage.erroCadSemEmail();
});

Then("devo receber uma mensagem de erro no campo senha", () => { 
	stefaniniPage.erroCadSemSenha();
});

Then("devo receber uma mensagem de erro por causa do primeiro nome", () => { 
	stefaniniPage.erroInsiraNomeCompleto();
});

Then("devo receber uma mensagem de erro por causa do email invalido", () => { 
	stefaniniPage.erroEmailInvalido();
});

Then("devo receber uma mensagem de erro por causa da senha invalida", () => { 
	stefaniniPage.erroSenhaInvalida();
});

When("insiro os dados do primeiro usuario", () => { 
	stefaniniPage.inserirNome();
	stefaniniPage.inserirEmail();
	stefaniniPage.inserirSenha();
});

When("insiro os dados do segundo usuario", () => { 
	stefaniniPage.inserirNomeUsuario2();
	stefaniniPage.inserirEmailUsuario2();
	stefaniniPage.inserirSenhaUsuario2();
});

When("excluir o primeiro usuario", () => { 
	stefaniniPage.deletarUsuario1();
});

When("o Id do segundo usuario deve se manter o mesmo", () => { 
	stefaniniPage.validarIdUsuario2();
});