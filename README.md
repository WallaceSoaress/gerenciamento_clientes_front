# devClinicas

Aplicacao desktop para gerenciamento de clientes, desenvolvida com Electron, React, TypeScript e Vite.

O projeto foi estruturado para funcionar hoje com persistencia local e ficar pronto para evoluir depois para Firebase/Firestore sem quebrar a interface nem a assinatura dos servicos.

## Visao Geral

O sistema oferece um painel desktop com foco em cadastro e consulta de clientes.

Fluxo atual:

- listar clientes
- visualizar metricas basicas
- cadastrar novo cliente
- abrir os detalhes de um cliente
- deletar um cliente com confirmacao
- navegar por uma pagina informativa sobre o projeto

## Stack Utilizada

- Electron
- React 19
- TypeScript
- Vite
- React Router DOM
- styled-components
- electron-builder

## Requisitos

Para rodar o projeto localmente, use:

- Node.js `22.13.0`
- npm ou yarn

Versao definida no projeto:

```bash
node -v
```

Deve retornar:

```bash
v22.13.0
```

Se voce usa `nvm`, pode instalar assim:

```bash
nvm install 22.13.0
nvm use 22.13.0
```

## Instalacao

Clone o projeto e instale as dependencias:

```bash
npm install ou yarn install
```

O `postinstall` executa:

```bash
electron-builder install-app-deps
```

Isso prepara dependencias necessarias para o ambiente Electron.

## Como Iniciar o Projeto

### Ambiente de desenvolvimento

```bash
npm run dev ou yarn dev
```

Esse comando inicia o app Electron em modo de desenvolvimento com watch ativo.

### Visualizar build local

```bash
npm run start
```

Esse comando usa o preview do `electron-vite`.

## Scripts Disponiveis

Inicia o projeto em desenvolvimento.

```bash
npm run dev ou yarn dev
```

Gera instalador para Windows.

```bash
npm run build:mac
```

Gera build para macOS.

```bash
npm run build:linux
```

## Como o Sistema Funciona

### Arquitetura

O projeto esta dividido em 3 partes principais:

- `src/main`: processo principal do Electron
- `src/preload`: camada de exposicao segura entre Electron e renderer
- `src/renderer`: interface React da aplicacao

No `renderer`, a organizacao foi separada em:

- `components`: componentes reutilizaveis
- `pages`: telas da aplicacao
- `layouts`: estrutura geral do painel
- `hooks`: regras de estado e carregamento
- `services`: acesso aos dados
- `types`: contratos tipados
- `constants`: configuracoes e textos de apoio
- `styles`: tema global e estilos base

### Roteamento

O sistema usa `HashRouter`, o que faz sentido para aplicacoes Electron.

Rotas atuais:

- `/clientes`: lista de clientes
- `/clientes/novo`: cadastro de cliente
- `/clientes/:clienteId`: detalhes do cliente
- `/sobre`: informacoes do projeto
- `*`: pagina de rota nao encontrada

Ao abrir o app, a rota inicial redireciona automaticamente para:

```txt
/clientes
```

### Funcionamento das Telas

### 1. Lista de clientes

Tela principal do sistema.

Ela mostra:

- cards clicaveis de clientes
- total de clientes cadastrados
- total de clientes com status ativo
- loading state enquanto os dados carregam
- empty state quando nao existe cliente
- tratamento visual de erro com opcao de recarregar

### 2. Cadastro de cliente

Tela usada para criar um novo cliente.

Campos exibidos:

- nome
- email
- cargo
- telefone
- endereco

Depois do cadastro com sucesso, o usuario e redirecionado automaticamente para a tela de detalhe do cliente criado.

### 3. Detalhe do cliente

Tela que mostra:

- nome
- cargo
- email
- telefone
- endereco
- status

Tambem possui:

- botao para voltar para a listagem
- botao para deletar cliente
- confirmacao antes da exclusao

### 4. Sobre

Tela institucional do projeto que explica:

- arquitetura
- organizacao do codigo
- uso atual de persistencia local
- preparacao para futura integracao com Firestore

## Persistencia de Dados

Hoje o projeto nao esta usando Firebase de verdade.

A camada de dados atual usa `localStorage` com comportamento assincrono simulado por `async/await` e pequenos delays artificiais.

Chave usada no navegador/Electron renderer:

```txt
devclinicas:clientes
```

### Como os dados sao carregados

- na primeira execucao, se nao existir dado salvo, o sistema cria uma base inicial com 3 clientes mockados
- se o `localStorage` estiver corrompido ou invalido, o sistema restaura essa base inicial
- as operacoes sao assincronas para facilitar a futura troca por Firestore

### Base inicial mockada

O sistema inicia com 3 clientes de exemplo para facilitar teste visual e navegacao.

## Regras de Negocio Atuais

Esta e a parte mais importante para documentacao do repositorio.

### Regras de cadastro

- `nome` e obrigatorio
- `email` e obrigatorio
- `cargo` e obrigatorio
- `endereco` e obrigatorio
- `telefone` e opcional

### Regra de validacao do email

- o email precisa seguir um formato valido
- se o campo estiver vazio, o cadastro nao e enviado
- se o formato for invalido, o sistema mostra erro no formulario

### Regra de tratamento dos dados no cadastro

- `nome` e salvo com `trim()`
- `email` e salvo com `trim()` e convertido para minusculo
- `cargo` e salvo com `trim()`
- `endereco` e salvo com `trim()`
- `telefone`, quando informado, e salvo com `trim()`

### Regra do telefone

- o telefone e opcional
- se o usuario nao informar telefone, o sistema gera automaticamente um telefone fallback

Formato do fallback:

- usa um padrao visual semelhante a telefone brasileiro
- tenta derivar numeros a partir do nome
- se nao houver numeros suficientes, completa com zeros

### Regra do identificador

- cada cliente recebe um `id` unico
- o sistema tenta usar `crypto.randomUUID()`
- se isso nao estiver disponivel, usa um fallback baseado em data atual

### Regra de status

- todo cliente novo entra com status `ATIVO`
- atualmente o unico status implementado no sistema e `ATIVO`

### Regra da listagem

- a listagem busca todos os clientes da camada de servico
- o total de clientes e calculado em tempo real
- o total de clientes ativos tambem e calculado em tempo real
- cada card de cliente abre a tela de detalhe correspondente

### Regra de detalhe

- a tela de detalhe depende do `clienteId` vindo pela rota
- se o `clienteId` nao existir ou nao for encontrado, a tela mostra estado de erro

### Regra de exclusao

- o usuario precisa confirmar a exclusao em um `confirm`
- se cancelar, nada acontece
- se confirmar, o cliente e removido do armazenamento local
- depois da exclusao, o sistema redireciona para `/clientes`

### Regra de erro e carregamento

- a listagem possui estado de carregamento
- a tela de detalhe possui estado de carregamento
- erros de carregamento mostram mensagens amigaveis
- a listagem oferece acao de tentar novamente

### Regra de navegacao

- sempre que a rota muda, a sidebar mobile e fechada automaticamente
- a rota raiz `/` redireciona para `/clientes`

## Integracao com Firebase

O projeto ja foi preparado para receber Firebase depois, mas ainda nao esta conectado.

Arquivo relacionado:

```txt
src/renderer/src/services/firebase/config.ts
```

Estado atual dessa integracao:

- configuracao do Firebase esta vazia
- `isFirebaseConfigured` esta como `false`
- existe uma observacao no codigo explicando que a persistencia local pode ser substituida por Firestore mantendo a mesma interface de servico

Isso significa que a troca futura deve preservar as funcoes:

- `addCliente`
- `getClientes`
- `getClienteById`
- `deleteCliente`

## Estrutura de Pastas

```txt
devClinicas/
|-- build/
|-- resources/
|-- src/
|   |-- main/
|   |-- preload/
|   `-- renderer/
|       `-- src/
|           |-- components/
|           |-- constants/
|           |-- hooks/
|           |-- layouts/
|           |-- pages/
|           |-- services/
|           |-- styles/
|           |-- types/
|           `-- utils/
|-- electron-builder.yml
|-- electron.vite.config.ts
|-- package.json
`-- README.md
```

## Build e Distribuicao

O empacotamento esta configurado com `electron-builder`.

Configuracoes importantes:

- nome do produto: `devclinicas`
- executavel Windows: `devclinicas`
- target Linux: `AppImage`, `snap` e `deb`
- atalho na area de trabalho no instalador Windows: habilitado

Comando principal para gerar instalador Windows:

```bash
npm run build:win
```

## Boas Praticas Ja Aplicadas no Projeto

- separacao entre camada visual e camada de dados
- hooks para regras de tela
- componentes reutilizaveis
- tema centralizado com `styled-components`
- roteamento declarativo
- estrutura pronta para escalar
- servicos assincronos para facilitar migracao de storage

## Limitacoes Atuais

Hoje o sistema ainda nao possui:

- autenticacao
- edicao de cliente
- mudanca de status
- filtros e busca
- paginacao
- persistencia real em Firebase/Firestore
- sincronizacao em nuvem

## Publicacao no GitHub

Para subir este projeto no GitHub, o `README` ja deixa claro:

- o que o sistema faz
- como instalar
- como rodar
- como gerar build
- qual versao do Node usar
- como a arquitetura foi organizada
- quais sao as regras atuais do sistema

Se quiser, o proximo passo pode ser padronizar tambem o repositorio com:

- ajuste de `.gitignore`
- licenca
- screenshots
- secao de roadmap
- secao de contribuicao
