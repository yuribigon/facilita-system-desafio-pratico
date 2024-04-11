
# Desafio Prático
Este é o README do projeto de gerenciamento de tarefas proposto em desafio técnico da Facilita System. 

Aqui você encontrará informações importantes sobre as dependências, configurações e instruções para executar o projeto.

## Projeto Front-End
### Dependências
- Node.js
- npm (ou yarn)

### Instruções de Configuração
- Clone este repositório para sua máquina local;
- Navegue até o diretório do projeto front-end (cd frontend)
- Instale as dependências do projeto (npm install);

### Execução do Projeto
Para executar o projeto front-end, use o seguinte comando:
- npm run dev

O projeto estará disponível em http://localhost:5173 (a depender da configuração do vite).

## Projeto da API
### Dependências
- Node.js
- npm (ou yarn)
- PostgreSQL (ou outro banco de dados relacional)

### Instruções de Configuração

- Clone este repositório para sua máquina local (se já não tiver feito isso).
- Navegue até o diretório do projeto da API (cd back);
- Instale as dependências do projeto (npm install);

### Configure o banco de dados PostgreSQL.
- Crie um banco de dados com o nome seu_banco_de_dados.
- Altere as configurações de conexão com o banco de dados no arquivo .env conforme necessário.
- Execute as migrações do banco de dados para criar as tabelas necessárias (npm run migrate)

### Execução do Projeto
Para executar o projeto da API, use o seguinte comando:
- npm run dev

A API estará disponível em http://localhost:8888.

### Considerações Importantes
Certifique-se de ter todas as dependências instaladas e configuradas corretamente antes de executar os projetos.
Verifique se o banco de dados está em execução e configurado corretamente para o projeto da API.
Se precisar de mais informações sobre como usar ou configurar o projeto, consulte os arquivos de código-fonte ou a documentação fornecida.