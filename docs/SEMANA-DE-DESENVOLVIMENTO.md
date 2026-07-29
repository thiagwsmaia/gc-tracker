# Semana de desenvolvimento

Este arquivo organiza o fluxo combinado para evoluir o GC Tracker durante a semana.

## Fluxo padrão

Para cada rodada de trabalho:

1. Implementar a mudança pedida.
2. Validar o app localmente.
3. Fazer um commit com nome claro.
4. Enviar para o GitHub.
5. Atualizar o `CHANGELOG.md` quando a mudança fechar uma etapa relevante.

Se alguma mudança ainda estiver experimental, ela pode ficar sem commit ate ser validada.

## Convenção de commits

Usar mensagens curtas e diretas, por exemplo:

- `Improve equipment editor`
- `Refine routine mission tracking`
- `Polish visual collection cards`
- `Add item accessory progression`
- `Update desktop workflow docs`

## Backlog inicial

- Completar o editor de equipamentos no estilo do GCFarm, com catalogo por slot.
- Melhorar imagens e estados dos slots de equipamento.
- Revisar Rotina para garantir que as estrelas representem progresso incremental.
- Refinar Itens com Solene, brincos, piercing e materiais por personagem.
- Revisar Títulos com marcos de AT, checks automáticos e ícones corretos.
- Ajustar Visual com builds separadas de acerto crítico e dano crítico.
- Melhorar Coleção visual com check de coleção obtida e imagens mais nítidas.
- Planejar automação/OCR para importar progresso a partir de prints do jogo.

## Combinado

Daqui pra frente, quando houver uma mudança concreta no GC Tracker, o padrão é:

```text
implementar -> validar -> commit -> push
```

Se o commit não deve ser feito ainda, avisar explicitamente: `não commita ainda`.
