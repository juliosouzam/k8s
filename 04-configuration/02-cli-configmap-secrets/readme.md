

```sh
kubectl create configmap literal-configmap --from-literal=KEY=value

kubectl create configmap file-configmap --from-file=file.yml
```

```sh
kubectl create secret generic literal-secret --from-literal=KEY=value

kubectl create secret generic file-secret --from-file=file.txt
```