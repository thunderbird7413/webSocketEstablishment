# Use Node official image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Expose server port
EXPOSE 4000

# Start server
CMD ["npm", "run", "dev"]
