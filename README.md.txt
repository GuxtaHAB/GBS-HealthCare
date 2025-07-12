GBS HealthCare - Login Page

Projeto de interface web para login, cadastro e navegação de usuários no sistema **GBS HealthCare**, voltado para ambiente médico ou de agendamento de consultas.

🧩 Funcionalidades

- Tela de login e cadastro de usuário (`index.html`)
- Página inicial com destaques ou funcionalidades (`inicio.html`)
- Recuperação de senha (`esqueceuSenha.html`)
- Página "Minha Conta" com informações do usuário (`minhaConta.html`)
- Dark mode e responsividade parcial (dependendo do CSS)
- Integração com imagens de profissionais da saúde

📁 Estrutura de Arquivos

GBSLoginPage/
│
├── index.html # Página de login e cadastro
├── inicio.html # Página principal após login
├── esqueceuSenha.html # Recuperação de senha
├── minhaConta.html # Perfil do usuário
│
├── style.css # Estilo para login/cadastro
├── inicio.css # Estilo da página inicial
├── minhaConta.css # Estilo da página de conta
│
├── script.js # Scripts gerais
├── inicio.js # Scripts da página inicial
│
├── Medico1.jpg ─┬───────── # Imagens de médicos
├── Medico2.jpg │
├── ... │
├── Medico6.jpg │
└── user.png ────────── # Ícone de usuário

💡 Como usar

1. Clone ou baixe o repositório.
2. Abra o `index.html` com um navegador moderno.
3. Navegue entre as páginas utilizando os links internos.
4. Scripts e estilos já estão referenciados localmente.

📌 Requisitos

- Navegador moderno (Chrome, Firefox, Edge)
- Não requer backend para testes simples (mas pode ser integrado a um sistema em Node, PHP, ASP.NET etc.)

✨ Melhorias futuras

- Validação de formulário com feedback visual
- Integração com backend (autenticação real)
- Suporte completo a dispositivos móveis
- Animações e transições mais suaves
