
Feature: Cadastrar novos usuarios   
    
    Scenario: Realizar o cadastro com sucesso
        Given que acesso o site da prova Stefanini
        When insiro os dados 
        And pressiono o botao cadastro
        Then devo ser cadastrado com sucesso

    Scenario: Tentar realizar cadastro sem informar o nome
        Given que acesso o site da prova Stefanini
        When insiro os dados com excecao do nome
        And pressiono o botao cadastro
        Then devo receber uma mensagem de erro no campo nome

    Scenario: Tentar realizar cadastro sem informar o email
        Given que acesso o site da prova Stefanini
        When insiro os dados com excecao do email
        And pressiono o botao cadastro
        Then devo receber uma mensagem de erro no campo email

    Scenario: Tentar realizar cadastro sem informar a senha
        Given que acesso o site da prova Stefanini
        When insiro os dados com excecao da senha
        And pressiono o botao cadastro
        Then devo receber uma mensagem de erro no campo senha

    Scenario: Tentar realizar cadastro sem informar o nome completo
        Given que acesso o site da prova Stefanini
        When insiro os dados porem apenas com o primeiro nome
        And pressiono o botao cadastro
        Then devo receber uma mensagem de erro por causa do primeiro nome

    Scenario: Tentar realizar cadastro com email invalido
        Given que acesso o site da prova Stefanini
        When insiro os dados porem com email invalido
        And pressiono o botao cadastro
        Then devo receber uma mensagem de erro por causa do email invalido

    Scenario: Tentar realizar cadastro com senha invalida
        Given que acesso o site da prova Stefanini
        When insiro os dados porem com senha invalida
        And pressiono o botao cadastro
        Then devo receber uma mensagem de erro por causa da senha invalida   

    Scenario: Cadastrar dois usuarios, excluir um e validar dados
        Given que acesso o site da prova Stefanini
        When insiro os dados do primeiro usuario
        And pressiono o botao cadastro
        And insiro os dados do segundo usuario
        And pressiono o botao cadastro
        When excluir o primeiro usuario
        Then o Id do segundo usuario deve se manter o mesmo  