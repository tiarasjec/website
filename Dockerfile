# Use the official Node.js image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the working directory
COPY . .

# Prisma setup
RUN npx prisma generate

# Build the Next.js app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]