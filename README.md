# EstateUi

- O estate UI é o front end feito para gestão de imobiliarias em fase de desenvolvimento.

- Desenvolvedores:

```Maria Eduarda : 
   Jarmison Paiva : @undervolt7
```

# Boas praticas com ferramenta de versionamento GIT

``` Abaixo será listado como usar a ferramenta git, para esse projeto será listado boas praticas com a ferramenta git
com os conceitos mais básicos de como criar uma branch, trocar de branchs e etc leia com atenção e use com atenção
```

# 1: Baixar a ferramenta GIT

- Para usar a ferramenta de versionamento deve ir ao seguinte site escolha a opção windowns, e escolher a plataforma 64x caso for windowns

[link para plataforma windows](https://git-scm.com/download/win)

# 2: Instalação na Maquina Windowns

``` 
    Para instalar a ferramenta basta executar o instalador e clicar em next caso for windowns sem menores preocupações, após a instalação será possivel
    ver 2 programas instalados em sua maquina Git Bash e Git Gui iremos usar o Git bash para manter o padrão de boas práticas.
```

# 3: Usando o Git Bash e Configurando Usuário e Repositorio do projeto

- 3.1: Criando uma nova pasta chamada developer e abrindo no git bash

```
 Crie uma pasta com o nome developer em seu computador pode ser em documentos será importante pois nessa pasta será importado o projeto, seguindo
 este passo de criar a pasta abra a pasta que você criou e com o click direito do mouse abra a opção Git Bash Heare após abri a pasta seguir os passos abaixo,
 será importante pois agora todas os proximos passos será necessario o uso do git bash.
```

- 3.2: Configurando o seu Usuario do Github

<p>A primeira coisa que você deve fazer ao instalar Git é configurar seu nome de usuário e endereço de e-mail. Isto é importante porque cada commit usa esta informação, e ela é carimbada de forma imutável, executar os seguintes comandos respectivamente sera configurado primeiramente o nome do seu usuario do github e depois o email executar no git bash </p>

``` 
git config --global user.name "seu username do github"
git config --global user.email "seuemailgithub@exemplo.br"

```

# 4: Configurando seu Editor

<p>Agora que a sua identidade está configurada, você pode escolher o editor de texto padrão que será chamado quando Git precisar que você entre uma mensagem. Se não for configurado, o Git usará o editor padrão, que normalmente é o Vim. Se você quiser usar um editor de texto diferente, como o Emacs, você pode fazer o seguinte: </p>

``` 
git config --global core.editor emacs

```

- Testando Suas Configurações:

<p>Se você quiser testar as suas configurações, você pode usar o comando git config --list para listar todas as configurações que o Git conseguir encontrar naquele momento: </p>

``` 
obs: isso sera a saida após executar o comando git config --list deve aparecer seu nome que vc escolheu e email também

user.name=Fulano de Tal
user.email=fulanodetal@exemplo.br
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto

```