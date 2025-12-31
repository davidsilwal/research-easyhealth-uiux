# Use the official Node.js Alpine image for a smaller base image
FROM node:alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:alpine AS production

# Install libc6-compat for compatibility
RUN apk add --no-cache libc6-compat

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Change ownership of the app directory to the nextjs user
RUN chown -R nextjs:nodejs /app

# Switch to the non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Start the application
CMD ["npm", "start"]