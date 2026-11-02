# Acolhe Mulher 🌸

> **Ações da Enfermagem na Atenção Primária à Saúde (APS) para a Prevenção da Gravidez na Adolescência**  
> Trabalho de Conclusão de Curso (TCC) — Graduação em Enfermagem  
> **Autora:** Larissa C. Garcia ([@larissacgarcia](https://github.com/larissacgarcia))

---

## 📌 Sobre o Projeto

O **Acolhe Mulher** é uma aplicação web educacional e de apoio à decisão clínica desenvolvida como produto técnico de TCC de Enfermagem. O foco central é fortalecer as ações de enfermagem na Atenção Primária à Saúde (APS / Estratégia Saúde da Família) para a prevenção da gravidez na adolescência, garantindo acolhimento humanizado, escuta qualificada e autonomia informada para adolescentes e jovens.

A plataforma oferece um **Quiz Clínico de Elegibilidade Contraceptiva**, no qual a usuária responde a questões sobre sua rotina, saúde e planos reprodutivos, recebendo recomendações baseadas nas melhores evidências científicas e protocolos oficiais do SUS.

---

## 📚 Base Teórica e Científica

O conteúdo técnico, as perguntas do questionário e o algoritmo de elegibilidade foram integralmente elaborados e fundamentados em fontes oficiais:

- **Ministério da Saúde (MS)**:
  - *Cadernos de Atenção Básica nº 26: Saúde Sexual e Saúde Reprodutiva* (2013).
  - *Protocolos da Atenção Básica: Saúde das Mulheres* (2016).
  - *Proteger e Cuidar na Atenção Básica: Ações e Estratégias para Adolescentes e Jovens* (2017).
  - *Caderneta de Saúde da Adolescente* (2021).
  - *Orientações sobre Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais* (2020).
- **Legislação e Normativas**:
  - **Lei nº 8.069/1990 (ECA)** — Direito à saúde, privacidade e confidencialidade da adolescente.
  - **Lei nº 13.798/2019** — Institui a Semana Nacional de Prevenção da Gravidez na Adolescência.
  - **Lei nº 13.709/2018 (LGPD)** — Privacidade por design; 100% de execução em memória local, sem persistência ou coleta de dados pessoais.
- **Conselho Federal de Enfermagem (COFEN)**:
  - **Resolução COFEN nº 690/2022** e **Resolução COFEN nº 714/2023** — Atuação e prescrição de enfermagem no planejamento reprodutivo na APS.
- **Organização Mundial da Saúde (OMS)**:
  - *Medical Eligibility Criteria for Contraceptive Use* (5th ed., atualizações contínuas).

---

## 🚀 Tecnologias Utilizadas

- **React 19** com **TypeScript** (tipagem estrita com `verbatimModuleSyntax`)
- **Vite** (bundler de alta performance)
- **Tailwind CSS v4** (design responsivo, acessível e otimizado)
- **Lucide React** (ícones acessíveis)
- **CSS Print** (`@media print` customizado para geração de cartão resumo/PDF)

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js (v18 ou superior recomendado)
- Git instalado

### Passo a Passo

```bash
# 1. Clonar o repositório
git clone https://github.com/larissacgarcia/tcc.git
cd tcc

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento local
npm run dev
```

Abra seu navegador em [http://localhost:5173](http://localhost:5173).

---

## 🌐 Publicação no GitHub Pages (Online)

Este repositório já está configurado com **GitHub Actions** automatizado (`.github/workflows/deploy.yml`).

### Como ativar a hospedagem gratuita:
1. Abra este repositório no GitHub: `https://github.com/larissacgarcia/tcc`
2. Clique na aba **Settings** (Configurações)
3. No menu lateral esquerdo, clique em **Pages**
4. Em **Build and deployment > Source**, selecione: **GitHub Actions**
5. Pronto! Em poucos instantes, o site estará publicado e acessível no endereço:
   👉 **`https://larissacgarcia.github.io/tcc/`**

---

## 🔒 Privacidade e LGPD

O **Acolhe Mulher** adota a filosofia *Privacy by Design*. Todas as respostas do questionário são processadas estritamente na memória volátil do navegador da usuária. Nenhum dado de saúde ou identificador pessoal é transmitido para servidores ou gravado em banco de dados.

---

## 📄 Licença e Uso Acadêmico

Este projeto foi desenvolvido com finalidade estritamente acadêmica e de extensão comunitária no âmbito do curso de graduação em Enfermagem.
