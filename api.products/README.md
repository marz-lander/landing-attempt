# Products Microservice
## Setup
To set up `api.products`, do the following:

1. Build the docker image by running the following command in this directory:

```Bash
user@machine:~directory$ docker build -t api.products:latest .
```

A container named `api-products` will be created. Depending on your operating
system, you may need to refer to it using `api.products` in order for `docker`
to recognize the container.

2. Start up the newly created container by running the following in the parent
directory (`/interview-stack-develop`):

```Bash
user@machine:~directory$ docker compose up -d
```

## Testing
To run tests for `api.products`, you can either do so by opening a shell in the
container and running `pytest` directly:

```
user@machine:~directory$ docker compose exec -it api-products bash
user@container:/api-products# pytest test/
```
or by running the tests directly in this directory.