# QoS

- Caso precise elimitar pods, Garanteed será um dos ultimos a serem deletados.
- Bustable, é um intermediário, ele terá uma certa prioridade.
- BestEffort, ele será um dos primeiros a serem eliminados.

Garanteed: Request e Limits precisam ser iguais.
Bustable: Request e Limits precisam ser diferentes.
BestEffort: Sem valores de Request e Limits

Para ter um valor mais preciso, podemos colocar um valor estipulado, e ai fazer testes de carga para em produção termos um valor mais acertivo.

OBS: Nunca colocar um valor muito alto ou muito baixo.