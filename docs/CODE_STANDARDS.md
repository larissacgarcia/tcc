# Padrões de Código e Diretrizes de Qualidade — Acolhe Mulher

## 1. Padrões de Código (TypeScript & React)

### 1.1 Tipagem Estrita e 'verbatimModuleSyntax'
- Todo tipo importado deve utilizar a sintaxe explícita `import type { NomeTipo } from '...';` para evitar emissão indevida de imports vazios no JavaScript final.
- Evitar o uso de `any`; todos os modelos de dados clínicos e resultados devem estar expressamente tipados em interfaces dedicadas (`ContraceptiveMethod`, `QuizQuestion`, `QuizAnalysisResult`).
- Variáveis ou imports não utilizados devem ser removidos para manter o compilador `tsc -b` com zero erros e warnings.

### 1.2 Componentização e Acessibilidade (WCAG 2.1 AA)
- **Formulários Semânticos**: Controles de escolha exclusiva devem usar `<form>`, `<fieldset>`, `<legend>` e `<input type="radio">` associados a `<label htmlFor="...">`.
- **Alvos Táteis**: Em interfaces móveis, botões e cards interativos devem respeitar a dimensão mínima de toque de 44x44px.
- **Foco Visível**: Todo elemento interativo possui indicador `:focus-visible` de alto contraste (`outline: 2px solid ...; outline-offset: 2px;`).
- **Animações Respeitosas**: Todas as animações do CSS utilizam propriedades aceleradas pelo compositor (`transform` e `opacity`) e respeitam a diretiva `@media (prefers-reduced-motion: reduce)`.

---

## 2. Regras de Impressão e PDF (@media print)
- Todas as fichas, blocos de resultado clínico e cartões de referências devem utilizar as classes `.pdf-card` ou `.avoid-break`.
- CSS de impressão configurado com `break-inside: avoid !important;` e `page-break-inside: avoid !important;`, impedindo cortes no meio de frases ou tabelas ao exportar relatórios para PDF.
- Links externos exibem texto de destino legível para conferência da banca examinadora.

---

## 3. Comandos de Manutenção
- Executar ambiente de desenvolvimento com acesso local e móvel:
  ```bash
  npm run dev
  ```
- Executar validação de tipos TypeScript e compilação de produção:
  ```bash
  npm run build
  ```
