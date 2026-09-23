# CRUD de Usuários com Node.js

Projeto simples usando Node.js, Express e Mongoose.

## Estrutura

```text
src/
├── controllers/
│   └── userController.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
└── server.js
```

## Executar

```bash
npm install
cp .env.example .env
npm run dev
```

É necessário ter o MongoDB rodando localmente.

## Rotas

| Método | Rota | Ação |
|---|---|---|
| GET | /usuarios | Lista usuários |
| GET | /usuarios/:id | Busca um usuário |
| POST | /usuarios | Cria um usuário |
| PUT | /usuarios/:id | Atualiza um usuário |
| DELETE | /usuarios/:id | Exclui um usuário |

## Exemplo de JSON

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "idade": 25
}
```
