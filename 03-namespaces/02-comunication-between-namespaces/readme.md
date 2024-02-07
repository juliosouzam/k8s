# Communication between namespaces

## DNS Resolution K8S:
`<service name>.<namespace>.svc.cluster.local`

Para saber se um recurso pode ser separado por `namespaces`, pode usar o comando `kubectl api-resources --namespaced`.
Ele irá listar todos os recursos que podem ser separados por `namespaces`