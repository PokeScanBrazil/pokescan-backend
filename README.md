# PokéScan Backend

REST API for [PokéScan](https://github.com/PokeScanBrazil/pokescan), an iOS app that identifies Pokémon TCG cards with the camera.

The app sends the card name and collection number it read from the card (for example `Pikachu`, `025`, `165`). The backend looks the card up in its PostgreSQL database and, if it is not there yet, fetches the public card details (image URL, edition, year, rarity and type) with a Python crawler, stores them and returns the card. Each card is fetched only once and served from the database after that.

It is a personal side project. The API stores card catalog data only; it does not store any personal data.

> Status: early development. See [ROADMAP.md](ROADMAP.md) for what comes next.

## Built with

- Node.js 20, Express 5
- PostgreSQL 15 with Prisma 7
- Python 3 crawler with Selenium and BeautifulSoup (`src/scripts/`)
- Docker and Docker Compose

## API

| Method | Path    | Description |
|--------|---------|-------------|
| GET    | `/`     | Health check |
| POST   | `/card` | Find a card or fetch and create it |

`POST /card` body:

```json
{ "name": "Pikachu", "collection_1": "025", "collection_2": "165" }
```

Response: the card record (`name`, `collection_1`, `collection_2`, `img_url`, `rarity`, `card_type`, `edition_id`).

## Data model

- `Edition`: name, abbreviation, year
- `Card`: name, collection numbers, image URL, rarity, type, edition (unique per collection number and edition)

See `prisma/schema.prisma`.

## Running locally

Requirements: Docker and Docker Compose.

```bash
git clone https://github.com/PokeScanBrazil/pokescan-backend.git
cd pokescan-backend
docker compose up --build
docker compose exec backend npx prisma migrate deploy
```

- API: http://localhost:3000
- Prisma Studio: http://localhost:5555 (`docker compose up prisma-studio`)

The database credentials in `docker-compose.yml` are local development defaults for the Postgres container, not real credentials. Configuration for other environments goes in a `.env` file (ignored by git).

## Project structure

```
src/
  index.js          # Express app
  routes/           # route definitions
  controllers/      # request handlers
  services/         # card lookup and persistence
  Crawler/          # Node wrapper that runs the Python crawler
  scripts/          # Python crawler
  lib/prisma.js     # Prisma client
prisma/             # schema and migrations
Dockerfile
docker-compose.yml
```

## License

[MIT](LICENSE) © João Guilherme Chagas de Freitas
