# cotact-keeper
## Contact Keeper application for managing contacts, a full stack application.
1. RectJS
2. Context API
3. NodeJS
4. Express JS + MongoDB

> Hosted at: [Contact Keeper](https://dbs-contact-keeper.herokuapp.com/login)

## Usage:
Add your environment variable inside ```config/dev.env``` (in root directort of project)
```bash
PORT=Your_Express_Port
MONGODB_URL=Your_MongoDB_URI
JWT_SCRT=Your_Jwt_Secret
```

#### Install dependencies:
```
npm install # Express dependencies
npm run clientinstall # React dependencies
```

#### Run server:
```
npm run dev # Express (:5000) and React (:3000)
npm run server # Express API only (:5000)
npm run client # React client only (:3000)
```
