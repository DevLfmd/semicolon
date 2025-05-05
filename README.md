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
3. Na seção "Pages", selecione "GitHub Actions" como fonte
4. Adicione os segredos do repositório:
   - Vá para "Settings" > "Secrets and variables" > "Actions"
   - Adicione os seguintes segredos:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: ID do serviço do EmailJS
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: ID do template do EmailJS
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: Chave pública do EmailJS
5. Faça push das alterações para a branch `main`
6. O GitHub Actions irá automaticamente construir e implantar o site
7. O site estará disponível em `https://seu-usuario.github.io/semicolon`

## Estrutura do Projeto

```
semicolon/
├── src/
│   ├── app/
│   │   ├── page.tsx      # Página principal
│   │   ├── layout.tsx    # Layout principal
│   │   └── globals.css   # Estilos globais
├── public/               # Arquivos estáticos
├── package.json
├── next.config.js
├── tailwind.config.js
├── .env.local           # Variáveis de ambiente
└── README.md
```

## Configuração do EmailJS

Para configurar o envio de emails através do formulário de contato:

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Crie um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email com as variáveis:
   - `from_name`: Nome do remetente
   - `from_email`: Email do remetente
   - `phone`: Telefone do remetente
   - `message`: Mensagem do remetente
4. Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua-public-key
```

## Personalização

- As cores principais podem ser alteradas no arquivo `tailwind.config.js`
- O conteúdo pode ser modificado no arquivo `src/app/page.tsx`
- As imagens podem ser adicionadas na pasta `public`

## Licença

Este projeto está sob a licença MIT.