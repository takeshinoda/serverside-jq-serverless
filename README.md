
# Serverside jq for Serverless

This is joke.

# Sample

index.js

```javascript
get_lambda_function = require('serverside-jq-serverless');
export.handler = get_lambda_function.default('. | .key1');
```

