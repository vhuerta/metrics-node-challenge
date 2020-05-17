# Problem
Build a metric logging and reporting service that sums metrics by time window for the most recent hour. You will build a lightweight web server that implements the two main APIs defined below.

## APIs
POST metric:
Request

#### POST /metric/{key}
Request:
```
{
  "value": 30
}
```

Response (200):
```
{}
```

#### GET /metric/{key}/sum

Response
```
{
"value": 30
}
```