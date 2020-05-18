# Problem
Build a metric logging and reporting service that sums metrics by time window for the most recent hour. You will build a lightweight web server that implements the two main APIs defined below.

## APIs
POST metric:
Request

#### POST /metric/{key}
Request:
```bash
curl --location --request POST 'https://vhuerta-node-challenge.herokuapp.com/metric/{key}' \
--header 'Content-Type: application/json' \
--data-raw '{
	"value": 10
}'
```

Response (200):
```javascript
{}
```

#### GET /metric/{key}/sum

Request:

```bash
curl --location --request GET 'https://vhuerta-node-challenge.herokuapp.com/metric/{key}/sum'
```

Response
```javascript
{
"value": 30
}
```

### HOW TO LOCALLY RUN THIS

```bash
npm install
npm run start:dev
```

##### SETTING THE PORT

```
PORT=3001 npm run start:dev
```
