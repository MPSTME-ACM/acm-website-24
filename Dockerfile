# Use Node.js 18 Alpine as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy all files to the working directory
COPY . .

# Install dependencies
RUN npm ci

# Build the application
RUN npm run build

ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["npm", "start"]