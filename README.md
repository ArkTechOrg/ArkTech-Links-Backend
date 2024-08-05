# ArkTech Links Backend

Backend for the ArkTech Links project. This project is a URL shortener that allows users to shorten URLs and view analytics on the shortened URLs.

## Installation

1. Clone the repository

```bash
git clone https://github.com/ArkTechOrg/ArkTech-Links-Backend
```

2. Go to the project directory

```bash
cd ArkTech-Links-Backend
```

3. Install dependencies

```bash
npm i
```

4. Create a `.env.development` file in the root of the project and add the following environment variables (replace the values with your own):

```bash
PORT=3000
MONGO_URI="mongodb://localhost:27017/ArkTech-Links"
```

5. Start the server in development mode

```bash
npm run dev
```
> The server will start on `http://localhost:3000`