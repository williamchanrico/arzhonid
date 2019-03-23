# Arzhonid

[![Build Status](https://cloud.drone.io/api/badges/williamchanrico/arzhonid/status.svg)](https://cloud.drone.io/williamchanrico/arzhonid)

Personal landing page, something to attach the domain to...

Runs on a small 3-node managed kubenernetes cluster (GKE).

[terraform-personal](https://github.com/williamchanrico/terraform-personal)

Using CloudFlare DNS provider, will need the API key to dynamically
change DNS records that are pointing to the preemptible nodes, and
since the k8s deployment files include a cert-manager,
it will also need the API key when generating the necessary tls certificates.

## Docker

### Drone CI/CD

Docker image will be built and pushed by drone.

Remember to change the image tag

[.drone.yml](https://github.com/williamchanrico/arzhonid/blob/a2eae15cc6ca3d4c3032d2c496773bc5a3cd216c/.drone.yml#L10)

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
