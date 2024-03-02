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

<p> para saber se está dentro da pasta correta ao lado do git bash aparecerar entre parenteses o nome da pasta que você acessou aparecerar dessa forma (estate-ui) </p>

# 6: Configurando a origem do nosso repositório

<p> Essa ação é necessaria para o git saber a origem do repositorio do projeto, exemplificando o que é um repositorio, seria onde armazenamos o nosso projeto no github, e por padrão devemos estabelecer para o git a origem do nosso repositório dentro do nosso projeto, para isso deve seguir os seguintes passos dentro da pasta estate-ui para tal configuração execute o seguinte comando no git bash.
</p>

```
git remote add origin https://github.com/WebSh4dow/legacy-ui.git
```

# 7: Fazendo modificações no projeto / enviando modificações de código

<p> Apartir desse passo será possivel realizar uma mudança e nos passos seguintes será explicado como enviar a sua modificação seguindo as boas praticas </p>

- Criando uma branch ou seja Ramificação

<p> Para fazer uma modificação é necessario criar uma nova ramificação, uma ramificação ou branch como chamamos é um ponto de partida onde
    você pode separar diferentes versões do projeto será listado o tipos de branchs nesse projeto</p>

<p> Ramificações/Branchs:</p>

- main

<p> A ramificação main é a ramificação responsavel pela versão de produção do projeto ou seja, somente será realizado uma alteração se
a ramificação de desenvolvimento estiver com uma versão adequada sem bugs ou algo parecido, quando a ramificação de desenvolvimento chamada developer
estiver ok e validada todas as alterações necessarias realizamos a mesclagem de alterações da branch developer enviando as modificações para a ramificação
de produção chamada main.</p>

- developer

<p> A ramificação developer como mensionada no passo anterior ela é responsavel pela versão de desenvolvimento do projeto onde você pode trabalhar em cada demanda
nessa branch, será explicado como você pode indentificar em que ramificação você está isso será importante.</p>


- Como criar uma ramificação de desenvolvimento / branch ?

<p>Como padrão o git estabelece a ramificação main provavelmente você deve está vendo no git bash ao lado do console a palavra (main) dessa forma,
dessa forma você identifica mais facil onde você está mas você pode listar as branchs use o seguinte comando para listar as ramificações do projeto.
</p>

```
git branch -l
```

<p>Irá aparecer uma listagem de branchs no git bash aparece em verde o nome da branch que você está alocado atualmente agora devemos criar uma nova branch, apartir da main mas o que seria esse apartir da main ? seria criar uma ramificação apartir da origem principal, chamada main ou seja caso seja necessario uma outra branch diferente da developer, terá primeiramente que criar apartir da ramificação principal isso será abordado em outro passo, mas por enquanto devemos criar a branch de desenvolvimento chamada developer. Para isso execute o seguinte comando </p>

<p> Esse comando cria a ramificação e desloca você até ela ou seja você cria a branch nova e logo em seguida fez o suite de branchs que seria a troca de branchs</p>

```
git checkout -b developer
```

- Realizando modificações no projeto estate-ui:

<p> Para realizar mudanças e saber o status dela exemplo o que foi que alterei e o que não alterei no projeto, primeiramente acesse o arquivo README.md,
e escolha um editor como VSCODE por exemplo e altere esse readme coloque seu nickname la em cima depois do seu nome no caso depois dos dois pontos : 
coloque seu nome ali e volte para o git bash e digite o seguinte comando.</p>

```
git status
```

<p> O comando git status lista o status de modificações para identificar o que você mudou aparecerar em vermelho com o nome do arquivo que você alterou,
aparecear da seguinte forma com a cor em vermelho o nome do arquivo e antes dele aparecar modifed significando que você alterou algo no projeto. Abaixo
coloquei um exemplo de como aparece para mim e deve aparecer para você desenvolvedor(a).
</p>

```
Your branch is up to date with 'origin/developer'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

```

- Adicionando sua modificação:

<p> Esse passo é importante pois aqui iremos diferenciar 2 forma de adicionar modificações iremos usar o seguinte comando para enviar apenas 1 arquivo que você
modificou ou seja apenas um arquivo com status de modified em vermelho você deve copiar o nome apos o modified: Ou seja todo o caminho especificado irei colocar de 
exemplo abaixo como você adiciona o arquivo que você modificou preparando assim para o envio. </p>


```
git add README.md 

```

<p> para saber se você realmente adicionou o arquivo digite o comando ``` git status ``` no git bash, e logo em seguida deve aparecer em ver o nome do arquivo que
você modificou, que significa que até esse ponto você conseguiu adicionar sua modificação, mas ainda assim você não enviou nada para o github. Teremos outro comando
que ficará encarregado de empacotar sua mudança e outro comando que envia para o repositorio com a devida ramificação. 
</p>

- Empacotando a modificação que você fez:

<p> Para empacotar sua modificação você deve usar o seguinte comando


```
git commit -m "dentro das aspas voce deve colocar a descrição da sua modificação  ex: Adicionando meu nickname ao readme"

```

<p> Para ficar organizado a forma como você irá adicionar sua descrição segue exemplos que serão usados no projeto, será usado alguns prefixos como 
    bug/fix, new/feature e etc e após o prefixo coloque resumidamente a sua modificação
</p>

<p> "bug/fix: ajustes na aplicação, corretivas no metodo de calcular impostos"</p>
<p> "new/feature: nova feature de cadastro de imoveis adicionada ao front end"</p>
<p> "docs/app: adicionado no readme o meu nickname na documentação inicial de como usar o git"</p>

<p> obs: importante você colocar entre aspas a descrição dessa forma git commit -m "descição aqui".

- Enviando a sua modificação

<p> Para enviar a sua modificação para a ramificação use o seguinte comando </p>

```
git push -u origin developer

```

# 8: Atualizando Branch principal

<p> apartir daqui será listado como você atualiza corretamente sua branch para poder trabalhar em novas branchs apartir da ramificação principal </p>

- Atualizando branch main


```
git pull origin main

```

<p>obs: você deve fazer isso para manter sua branch principal sempre atualizada outra observação cuidado para não atualizar sua branch de desenvolvimento e acabar
perdendo as suas modificações mas isso será abordado nos proximos passos.</p>


