# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
# Copy package files
COPY package*.json ./
# Install dependencies
RUN npm ci
# Copy source code
COPY . .
# Build Next.js static export
ENV NODE_ENV=production
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine AS production
# Copy built static files from builder
COPY --from=builder /app/out /usr/share/nginx/html
# Add nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]