# Imersão Fullcycle 20 - Sistema de rastreamento de veículos

![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

Participe gratuitamente: [https://imersao.fullcycle.com.br/](https://imersao.fullcycle.com.br/)

## **Requerimentos**

Cada projeto tem seus próprios requerimentos, mas uma ferramenta é comum a todos: o Docker.

### **Docker**

Dependendo do seu sistema operacional, você tem 2 opções para instalar o Docker:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - Interface gráfica para gerenciar e usar o Docker.
- [Docker Engine](https://docs.docker.com/engine/install/) - Apenas a engine do Docker, sem interface gráfica (Docker Nativo).

Se você tem **8GB ou menos de memória RAM**, recomendamos o uso do **Docker Engine**, pois o Docker Desktop pode consumir muitos recursos. Caso contrário, o Docker Desktop é mais prático.

Saiba mais: [https://www.youtube.com/watch?v=99dCerRKO6s](https://www.youtube.com/watch?v=99dCerRKO6s).

Se você estiver no Windows, use o **WSL 2**. Veja nosso tutorial: [https://github.com/codeedu/wsl2-docker-quickstart](https://github.com/codeedu/wsl2-docker-quickstart).

---

## **Rodar a aplicação**

Antes de rodar a aplicação, certifique-se de que você tem o **Docker** e o **Docker Compose** instalados.

### **1. Subindo os containers**
Execute o seguinte comando para iniciar todos os serviços necessários:

```bash
docker-compose up -d
```

> 💡 *Este comando irá baixar e rodar todas as dependências do projeto, incluindo o banco de dados, backend, frontend e simulador.*

### **2. Acessando os serviços**
Após subir os containers, utilize os comandos abaixo para rodar cada serviço.

| **Serviço** | **Pasta do projeto** | **Comando para acessar o container** | **Comando para iniciar** |
|-------------|---------------------|--------------------------------|----------------------|
| **Simulador (Go)** | `golang-simulator` | `docker compose exec simulator sh` | `go run cmd/simulator/main.go` |
| **Backend (NestJS - API)** | `nestjs-api` | `docker compose exec nest bash` | `npm run start:dev` |
| **Backend (NestJS - Consumer)** | `nestjs-api` | `docker compose exec nest bash` | `npm run start:dev -- --entryFile=cmd/kafka.cmd` |
| **Frontend (Next.js)** | `next-frontend` | `docker compose exec next bash` | `npm run dev` |

> ⚠️ *Como você já subiu os containers, não é necessário rodar comandos como `docker-compose up` dentro das pastas individuais.*

---

## **Arquitetura do projeto**

![Arquitetura do projeto](./arquitetura_projeto.png)
