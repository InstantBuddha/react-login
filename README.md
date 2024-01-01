# React Login

## Running in Docker

```
docker run -it --rm --name react-login -p 3001:3000 -v $(pwd):/app -w /app node:14-alpine sh -c "npm install && npm start"
```