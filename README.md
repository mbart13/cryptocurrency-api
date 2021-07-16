## Cryptocurrency API

### Links

[Demo](https://cryptocurrency-api.vercel.app)

### Setup

To run this project locally, enter below commands:

```
yarn && yarn start
```

or

```
npm install && npm start
```

## Notes

As per below note from CoinMarketCap docs, they are blocking HTTP requests from client side:

> Making HTTP requests on the client side with Javascript is currently prohibited through CORS configuration. This is to protect your API Key which should not be visible to users of your application so your API Key is not stolen. Secure your API Key by routing calls through your own backend service.

I decided to create [my own proxy](https://github.com/mbart13/cryptocurrency-api-backend)

Additionally I implemented:

- dark/light mode
- saving theme preference to local storage
