# Arquitetura e Engenharia de Software — Acolhe Mulher

## 1. Visão Geral da Tecnologia
O **Acolhe Mulher** é uma tecnologia cuidativo-educacional desenvolvida no formato Single Page Application (SPA), concebida para apoiar a consulta de enfermagem na Atenção Primária à Saúde (APS) voltada para a prevenção da gravidez na adolescência.

### Stack Tecnológica
- **Linguagem & Tipagem**: TypeScript 5.8+ com modo estrito (`strict: true`) e `verbatimModuleSyntax`.
- **Biblioteca de Interface**: React 19.3.x (componentização funcional e hooks modernos).
- **Estilização**: Tailwind CSS v4 com motor de processamento direto no Vite (`@tailwindcss/vite`).
- **Ícones & Design System**: Lucide Icons (pacote nativo em SVG com espessura padronizada de 1.5 a 2px).
- **Empacotador & DevServer**: Vite 8.x com hot-module-replacement (HMR) e suporte a `--host` para testes em rede local/mobile.

---

## 2. Princípio Arquitetural: Client-Side First (Armazenamento Zero)
Para atender às exigências da **LGPD (Lei nº 13.709/2018)** e aos preceitos éticos da pesquisa em saúde (Resolução CNS nº 510/2016):
- **Nenhum dado é enviado para servidores**: Toda a inferência clínica dos Critérios de Elegibilidade do Ministério da Saúde é executada localmente no JavaScript do navegador.
- **Memória volátil da sessão**: As respostas do questionário existem estritamente no estado do React (`useState`). Ao fechar a aba ou recarregar a página, qualquer vestígio de resposta é automaticamente descartado.
- **Zero telemetria e zero cookies de rastreamento**: Não são utilizados cookies de terceiros ou ferramentas de rastreamento invasivas.

---

## 3. Estrutura de Diretórios
```text
acolhe-mulher/
├── docs/                        # Documentação oficial do projeto e TCC
│   ├── ARCHITECTURE.md          # Especificação técnica e arquitetura
│   ├── CLINICAL_PROTOCOL.md     # Protocolos do Ministério da Saúde e OMS
│   ├── CODE_STANDARDS.md        # Padrões de código e acessibilidade
│   └── TCC_SUMMARY.md           # Resumo executivo do TCC de Enfermagem
├── public/                      # Ativos estáticos públicos
│   └── favicon.svg              # Identidade visual
├── src/
│   ├── components/              # Componentes React modulares
│   │   ├── Header.tsx           # Cabeçalho minimalista
│   │   ├── HomeView.tsx         # Página inicial focada no Quiz e Referências
│   │   ├── QuizView.tsx         # Questionário clínico de elegibilidade
│   │   ├── ReferencesAbntView.tsx # Página de referências ABNT NBR 6023
│   │   ├── LegalPrivacyModal.tsx# Modal de Privacidade, LGPD e Termos Éticos
│   │   └── Footer.tsx           # Rodapé com canais do SUS (136/180)
│   ├── data/                    # Bases clínicas padronizadas do Ministério da Saúde
│   │   ├── abntReferences.ts    # Referências NBR 6023 e fundamentação das perguntas
│   │   ├── contraceptiveMethods.ts # Métodos contraceptivos e índices de Pearl
│   │   └── quizQuestions.ts     # Perguntas clínicas adaptadas para adolescentes
│   ├── utils/
│   │   └── eligibilityAlgorithm.ts # Motor de inferência (Categorias 1 a 4 OMS/MS)
│   ├── App.tsx                  # Roteador de abas e controle de estados
│   ├── index.css                # Estilização base, animações e regras de impressão
│   └── main.tsx                 # Ponto de entrada do React 19
├── package.json                 # Manifesto de dependências e scripts
└── vite.config.ts               # Configuração do Vite e Tailwind v4
```
