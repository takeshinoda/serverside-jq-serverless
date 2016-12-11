
# Serverside jq for Serverless

This is joke.

# Sample

index.js

```javascript
get_lambda_function = require('serversid-jq-serverless');
export.handler = get_lambda_function('. | .key1');
```

