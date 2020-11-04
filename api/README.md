# Recuperação de Senha

**RF (Requisitos Funcionais)**

- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF (Requisitos não funcionais)**

- Utilizar Mailtrap para testa envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN (Regras de Negócio)**

- O link enviado por email para resetar a senha deve expirar em 2h;
- O usuário deve confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**RN**

- O usuário não pode alterar seu e-mail para um email já utilizado;
- Para atualizar seu senha, o usuário deve informar a sua senha antiga;
- Para atualizar seu senha, o usuário precisa confirmar a nova senha;

# Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notidicações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador específico;
- O usuário deve poder listar horários disníveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;


**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve duar meia hora;
- Os agendamentos devem estar disponíveis entre 10h e 18h (Primeiro às 10h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços com ele mesmo;

1. Rotas e controllers
2. Repositório de tokens (TypeORM)
3. Cria migration de tokens
4. Provider de envio de e-mail (Dev)
5. Registrar providers no container
6. Testar tudo!
