# GC Tracker

Aplicativo local de acompanhamento de conta para **Grand Chase Classic**.

O projeto organiza progresso por personagem, rotina, itens, títulos, conjunto visual e coleção visual. A ideia é substituir a planilha por uma experiência local mais prática, com interface inspirada no fluxo do GCFarm e dados salvos no próprio computador.

## Funcionalidades

- Painel inicial com visão geral da conta.
- Controle de equipamentos por personagem.
- Rotina com estrelas progressivas por missão.
- Acompanhamento de itens, fragmentos, núcleos e etapas de acessórios.
- Controle de títulos e marcos de ataque total.
- Planejamento de visual por build de acerto crítico e dano crítico.
- Coleção visual filtrável por atributo.
- Exportação e importação de snapshot em JSON.
- Versão desktop com Electron.

## Histórico

O progresso por data está documentado em [CHANGELOG.md](./CHANGELOG.md).

## Rodar localmente

```powershell
npm install
npm start
```

## Criar atalho de desktop

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\criar-atalho-desktop.ps1
```

## Gerar versão desktop

```powershell
npm run pack
```

O executável fica em:

```text
dist\win-unpacked\GC Tracker.exe
```

## Observação

Este é um projeto independente, feito para uso pessoal/local de jogadores de Grand Chase Classic. Não é afiliado à KOG, GC Classic ou GCFarm.
