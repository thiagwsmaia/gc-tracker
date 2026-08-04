# Histórico do projeto

## 2026-08-04

- Registro do print do Zero com Ataque Total, indicadores de poder e peças visíveis sem cadeado.
- Atualização do Jin com novo Ataque Total, indicadores de poder e fortificações visíveis no print mais recente.
- Registro do print do Lupus com Ataque Total, indicadores de poder e peças Void visíveis.
- Inclusão dos recortes dos equipamentos visíveis do Lupus na tela de Personagens.
- Ordem dos personagens passa a ser compartilhada entre Itens, Personagens, Rotina, Títulos e Visual, usando a sequência organizada em Itens como referência.
- Recortes das roupas do set Void do Jin foram refeitos a partir do print mais limpo do GCFarm, mantendo as armas do print do jogo.

## 2026-08-03

- Aba Itens preserva a posição do scroll ao clicar em Solene, Brinco/Piercing ou ajustar quantidades.
- Aba Itens agora permite digitar quantidades diretamente no campo central, mantendo os botões laterais para ajuste fino.
- Brinco e Piercing foram unificados em uma única coluna de estágio para reduzir repetição na tabela.

## 2026-07-31

- Padronização do ícone do app, favicon, marca lateral, janela Electron e atalho para o Jin.
- Ajuste do atalho da área de trabalho para abrir sempre a versão atual do projeto via launcher.
- Recorte e inclusão das imagens reais das peças do print do Jin.
- Refinamento dos recortes das peças do Jin para evitar imagens cortadas e pedaços de slots vizinhos.
- Slots preenchidos agora exibem foto do item com badge de fortificação no canto, aproximando a tela do estilo do GCFarm.
- Validação visual confirmou 14 slots do Jin com imagens reais.

## 2026-07-30

- Registro do print do Jin como evidência confirmada.
- Atualização do Jin para Ataque Total 1.192.612 e marco de 1000 AT completo.
- Marcação de set Void completo inferido por fundos vermelhos no print.
- Adição da arma secundária/reserva de Berkas ao catálogo e ao Jin.
- Marcação do brinco do Jin como lendário pelo fundo roxo.
- Adição de indicadores de poder por personagem: Ataque + Ataque Especial, Dano Crítico 900/1000 e Acerto Crítico 100%.

## 2026-07-29

- Expansão inicial do catálogo de equipamentos para todos os slots.
- O editor de equipamento agora mantém o slot vazio ao abrir, sem selecionar item automaticamente.
- Adição de ícones internos por tipo de slot no catálogo do editor.
- Adição de progresso de equipamentos por personagem, com contador de slots preenchidos e barra visual.
- Adição de controles para reordenar personagens diretamente na aba Personagens.
- Validação do editor com Chrome/Playwright.

## 2026-07-28

- Organização do projeto em pasta própria de portfólio.
- Publicação do repositório no GitHub.
- Configuração do app desktop com Electron.
- Criação de scripts para abrir o GC Tracker e gerar atalho na área de trabalho.
- Documentação inicial do projeto.

## 2026-07-27

- Ajuste da aba Visual com builds separadas de acerto crítico e dano crítico.
- Correção do cálculo de acerto vindo de peças visuais.
- Ajuste da rotina com estrelas progressivas por missão.
- Separação da aba Itens com materiais, Solene e etapas de acessórios.
- Melhorias na aba Títulos com AT editável, checks automáticos e ícones.

## 2026-07-26

- Criação da estrutura principal do GC Tracker local.
- Implementação das abas Painel, Personagens, Rotina, Itens, Títulos, Visual e Coleção visual.
- Importação de referências visuais e ícones.
- Adição de exportação e importação de snapshot JSON.
- Primeiros ajustes de interface inspirados no GCFarm e na planilha.

## Próximos commits

A partir de agora, cada rodada de mudança deve entrar como commit separado, por exemplo:

- `Improve equipment editor`
- `Add OCR import workflow`
- `Refine visual collection cards`
- `Add character progress automation`
