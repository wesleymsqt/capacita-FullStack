# Instruções Básicas

## 1. Backend/Prisma

### Crie o arquivo .env com as variáveis de ambiente dentro da pasta prisma:

```bash
DATABASE_URL="postgresql://SEU_USUARIO:SUA_SENHA@localhost:5432/sushi_db?schema=public"
PORT=3000
```
- troque ```SEU_USUARIO``` e ```SUA_SENHA``` pelas credenciais de acesso ao banco de dados.

Navegue até a pasta backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Gere as configurações do Prisma:
```bash
npx prisma migrate dev
```
E:

```bash
npx prisma generate
```

Inicie o backend:

```bash
node src/app.js
```

### 2. Adicionar Dados no Banco de Dados

Para adicionar os dados no banco, use o Postman com as seguintes configurações:

#### 2.1 Adicionar Categorias

Selecione o método POST e use a URL:

```bash
http://localhost:3000/categories?Content-Type=application/json
```

No body, selecione a opção raw e adicione uma categoria por vez:

```json
{ "name": "Pratos" }
```

```json
{ "name": "Bebidas" }
```

```json
{ "name": "Sobremesas" }
```

```json
{ "name": "Chás" }
```

#### 2.2 Adicionar Produtos

Selecione o método POST e use a URL:

```bash
http://localhost:3000/products?Content-Type=application/json
```

No body, selecione a opção raw e cole os dados dos produtos no formato JSON:

```json
[
  {
    "name": "Ramen – Naruto",
    "description": "Shoyu ramen com fatias de carne de porco, ovo cozido e cebolinha.",
    "price": 26,
    "categoryId": 1
  },
  {
    "name": "Katsudon – Yuri!!! on Ice",
    "description": "Arroz coberto com costeleta de porco empanada, cozida com ovo e molho shoyu adocicado.",
    "price": 27,
    "categoryId": 1
  },
  {
    "name": "Omurice – Shokugeki no Soma",
    "description": "Arroz frito envolto por uma omelete macia e coberto com ketchup.",
    "price": 18,
    "categoryId": 1
  },
  {
    "name": "Nikuman – Kiki’s Delivery Service",
    "description": "Pão cozido no vapor recheado com carne de porco e temperos.",
    "price": 6,
    "categoryId": 1
  },
  {
    "name": "Takoyaki – My Hero Academia",
    "description": "Bolinha de massa recheada com pedaços de polvo e cobertas com molho takoyaki, maionese e flocos de peixe seco.",
    "price": 4,
    "categoryId": 1
  },
  {
    "name": "Sakê",
    "description": "Bebida alcoólica fermentada à base de arroz.",
    "price": 30,
    "categoryId": 2
  },
  {
    "name": "Shochu",
    "description": "Destilado japonês feito de cevada, batata-doce ou arroz.",
    "price": 220,
    "categoryId": 2
  },
  {
    "name": "Ramune",
    "description": "Refrigerante gaseificado com garrafa de bolinha de vidro.",
    "price": 31,
    "categoryId": 2
  },
  {
    "name": "Calpis",
    "description": "Bebida láctea levemente adocicada e refrescante.",
    "price": 18,
    "categoryId": 2
  },
  {
    "name": "Amazake",
    "description": "Bebida doce e quente feita de arroz fermentado.",
    "price": 15,
    "categoryId": 2
  },
  {
    "name": "Mochi",
    "description": "Bolinho de arroz glutinoso recheado com doce de feijão (anko) ou sorvete.",
    "price": 8,
    "categoryId": 3
  },
  {
    "name": "Dorayaki",
    "description": "Panqueca recheada com pasta de feijão doce.",
    "price": 25,
    "categoryId": 3
  },
  {
    "name": "Taiyaki",
    "description": "Bolinho em formato de peixe, recheado com anko, creme ou chocolate.",
    "price": 15,
    "categoryId": 3
  },
  {
    "name": "Dango",
    "description": "Bolinhas de massa de arroz servidas no espeto.",
    "price": 12,
    "categoryId": 3
  },
  {
    "name": "Matcha Parfait",
    "description": "Sobremesa em camadas com sorvete de chá-verde, feijão doce, frutas e biscoitos.",
    "price": 20,
    "categoryId": 3
  },
  {
    "name": "Yokan",
    "description": "Doce de feijão com ágar-ágar e açúcar.",
    "price": 5,
    "categoryId": 3
  },
  {
    "name": "Matcha",
    "description": "Chá-verde em pó muito utilizado na cerimônia do chá.",
    "price": 7,
    "categoryId": 4
  },
  {
    "name": "Sencha",
    "description": "Chá-verde mais comum no Japão, com sabor equilibrado.",
    "price": 5,
    "categoryId": 4
  },
  {
    "name": "Hojicha",
    "description": "Chá-verde torrado, com sabor defumado e menos cafeína.",
    "price": 6,
    "categoryId": 4
  },
  {
    "name": "Genmaicha",
    "description": "Chá-verde misturado com arroz torrado, conferindo um sabor levemente amanteigado.",
    "price": 5,
    "categoryId": 4
  },
  {
    "name": "Kombucha",
    "description": "Chá feito de algas marinhas kombu.",
    "price": 6,
    "categoryId": 4
  }
]
```

## 2. Frontend/React

### Navegue até a pasta frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o Frontend:

```bash
node npm run dev
```
