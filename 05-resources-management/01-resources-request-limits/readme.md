Caso o cluster não tenha a API de métricas, pode ser instalado usando a doc:

https://github.com/kubernetes-sigs/metrics-server

curl --data "millicores=300&durationSec=600" http://<EXTERNAL-IP>:8080/ConsumeCPU

```sh
$ curl --data "megabytes=50&durationSec=60" http://<external-ip>/ConsumeMem
$ curl --data "millicores=300&durationSec=60" http://<external-ip>/ConsumeCPU
```


