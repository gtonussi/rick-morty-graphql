# Build static React assets
FROM node:22-alpine3.21 AS build

WORKDIR /app

# Refresh Alpine packages in builder
RUN apk upgrade --no-cache

COPY package*.json ./
RUN npm ci

COPY . .

# Allows overriding the GraphQL endpoint at build time.
ARG REACT_APP_API_URL=https://rickandmortyapi.com/graphql
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

RUN npm run build

# Serve build output with nginx
FROM nginx:1.27-alpine3.21 AS runtime

# Refresh Alpine packages in runtime image
RUN apk upgrade --no-cache

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
