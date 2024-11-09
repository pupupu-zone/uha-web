# module install
FROM node:20 as module-install-stage
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV GATSBY_TELEMETRY_DISABLED=1

COPY . /app/

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

# serve
FROM nginx:alpine

COPY --from=module-install-stage /app/public/ /var/www/
COPY nginx.conf /etc/nginx/nginx.conf

# start app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
