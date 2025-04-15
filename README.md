# Site Institucional - Empresa de Desenvolvimento Full Stack

Este é um site institucional moderno e responsivo desenvolvido com Next.js, Tailwind CSS e Framer Motion.

## Tecnologias Utilizadas

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript
- Hero Icons

## Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/luiz-institucional.git
cd luiz-institucional
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

## Deploy no GitHub Pages

1. Certifique-se de que o repositório está configurado no GitHub
2. Vá para as configurações do repositório
3. Na seção "Pages", selecione a branch `gh-pages` como fonte
4. O site estará disponível em `https://seu-usuario.github.io/luiz-institucional`

## Estrutura do Projeto

```
luiz-institucional/
├── src/
│   ├── app/
│   │   ├── page.tsx      # Página principal
│   │   ├── layout.tsx    # Layout principal
│   │   └── globals.css   # Estilos globais
├── public/               # Arquivos estáticos
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## Personalização

- As cores principais podem ser alteradas no arquivo `tailwind.config.js`
- O conteúdo pode ser modificado no arquivo `src/app/page.tsx`
- As imagens podem ser adicionadas na pasta `public`

## Licença

Este projeto está sob a licença MIT. 