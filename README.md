# Arzhonid

[![Build Status](https://cloud.drone.io/api/badges/williamchanrico/arzhonid/status.svg)](https://cloud.drone.io/williamchanrico/arzhonid)

Personal landing page, something to attach the domain to.

Runs on a small 3-node managed kubenernetes cluster (GKE)
spawned from [terraform-personal](https://github.com/williamchanrico/terraform-personal).

Using CloudFlare DNS provider, will need the API key to dynamically
change DNS records that are pointing to the preemptible nodes, and
since the k8s deployment files include a cert-manager,
it will also need the API key when generating the necessary tls certificates.

## Docker

### Drone CI/CD

Docker image will be built and pushed by drone.

Remember to change the image tag in `.drone.yaml`

### Locally

```
$ make help
help                           Help message
build                          Build the container
run                            Run container
push                           Push image
stop                           Stop container<Paste>
```

## Screenshot
![screenshot](www/screenshot.png?raw=true "Screenshot")
