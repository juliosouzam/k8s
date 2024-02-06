# Node Port

Gera um acesso externo aos pods, utilizando um range de portas 30000-32767

Utiliza o IP do nó do k8s para se comunicar com o serviço

Para ver os nós do k8s, rode o comando:
```sh
$ kubectl get nods -o wide
```

ele mostra os nós com os IPs

Caso tente conectar usando o nome do service, não irá conseguir usando a porta, a porta é só no tipo NodePort, quando é o Cluster IP é para usar a porta do service.
