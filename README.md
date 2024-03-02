# EstateUi

- O estate UI é o front end feito para gestão de imobiliarias em fase de desenvolvimento.

- Desenvolvedores:

<p>Maria Eduarda : </P>
<p>Jarmison Paiva : @undervolt7 </P>


# Boas praticas com ferramenta de versionamento GIT

<p>Abaixo será listado como usar a ferramenta git, para esse projeto será listado boas praticas com a ferramenta git
com os conceitos mais básicos de como criar uma branch, trocar de branchs e etc leia com atenção e use com atenção
</P>

# 1: Baixar a ferramenta GIT

<p>Para usar a ferramenta de versionamento deve ir ao seguinte site escolha a opção windowns, e escolher a plataforma 64x caso for windowns</P>

[link para plataforma windows](https://git-scm.com/download/win)

# 2: Instalação na Maquina Windowns

<p> 
    Para instalar a ferramenta basta executar o instalador e clicar em next caso for windowns, após a instalação será possivel
    ver 2 programas instalados em sua maquina o Git Bash e Git Gui,  iremos usar o Git bash para manter o padrão de boas práticas.
</P>

# 3: Usando o Git Bash e Configurando Usuário e Repositorio do projeto

- 3.1: Criando uma nova pasta chamada developer e abrindo no git bash

<p>
 Crie uma pasta com o nome developer em seu computador pode ser em documentos será importante pois nessa pasta será importado o projeto, seguindo
 este passo de criar a pasta abra a pasta que você criou, e com o click direito do mouse abra a opção Git Bash Heare. Após abrir a pasta seguir os passos abaixo,
 será importante pois agora todas os proximos passos, será necessario o uso do git bash.
</P>

- 3.2: Configurando o seu Usuario do Github

<p>A primeira coisa que você deve fazer ao instalar Git é configurar seu nome de usuário e endereço de e-mail. Isto é importante porque cada commit usa esta informação, e ela é carimbada de forma imutável, executar os seguintes comandos respectivamente sera configurado primeiramente o nome do seu usuario do github e depois o email executar no git bash. </p>

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

<p> obs: isso sera a saida após executar o comando git config --list deve aparecer seu nome que vc escolheu e email também. </p>

``` 

user.name=Fulano de Tal
user.email=fulanodetal@exemplo.br
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto

```

# 5: Clonando o projeto na pasta developer

<p> Outro passo importante para trabalhar em equipe é clonar o projeto adequadamente em um local adequado no seu computador,
como boa praticas criamos uma pasta chamada developer pode ser na aba de documentos do windowns ou onde achar mais organizado,
lembrando que você deve está com o git bash aberto e também na pasta correta para importar o projeto. </p>

- Executar o seguinte comando no git bash

```
git clone https://github.com/WebSh4dow/legacy-ui.git
```

<p> Após executar o comando git clone você deve executar o seguinte comando para acessar a pasta do projeto, apartir daqui todos os passos para,
enviar modificações no codigo alterações entre ramificações devem ser executadas dentro da pasta do projeto estate-ui você perceberá que
ao executar o comando clone irá aparecer uma nova pasta chamada estate-ui para ver se realmente tem essa pasta execute no git bash o seguinte comando.</p>

```
ls
```
<p>Após executar esse comando será possivel ver uma pasta chamada estate-ui no console do git, mas somente com esse comando ainda não será possivel acessar a pasta, para acessar a pasta estate-ui execute esse comando no git bash.</p>

```
cd estate-ui
```

<p> para saber se está dentro da pasta correta ao lado do git bash aparecerar entre parenteses o nome da pasta que você acessou (estate-ui) dessa forma</p>



