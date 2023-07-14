# qip-frontend
Aplicação frontend do meu MVP da sprint de desenvolvimento full-stack da minha pós-graduação 

---
## Como executar 

1. Instalar dependências (as mesmas estão descritas no arquivo `package.json`).
```
$ npm install
```

2. Provisionar as variáveis de ambiente
```
|   Variável        |   Descrição   |   Observações                                             |
|   -------------   |   --------    |   -----------------------------------------------------   |
|   VITE_API_URL    |   URL da API  |   A URL deve estar completa (i.e. http://localhost:5000)  |
```
>*Para provisionar essas variáveis, deve-se copiar o arquivo `.env.example` na raiz do projeto, alterá-lo para apenas `.env` e alimetá-lo com os valores desejados*

3. Disponibilizar a aplicação
- em modo desenvolvedor
```
$ npm run dev
```

- build de produção
```
$ npm run build && npm run preview
```

> **A aplicação fica acessível pelo navegador acessando http://localhost:5173 (em desenvolvimento) ou http://127.0.0.1:4173 (em preview)**
