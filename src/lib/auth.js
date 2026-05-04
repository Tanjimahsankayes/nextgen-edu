import "server-only";

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// Check if required environment variables are set
const authDbUrl = process.env.AUTH_DB_URL;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!authDbUrl) {
  console.warn("AUTH_DB_URL is not set. Using in-memory database.");
}

if (!googleClientId || !googleClientSecret) {
  console.warn(
    "Google OAuth credentials are not set. Google sign-in will not work.",
  );
}

// Initialize database only if URL is provided
let db = null;
let client = null;

if (authDbUrl) {
  try {
    const { MongoClient } = await import("mongodb");
    client = new MongoClient(authDbUrl);
    await client.connect();
    db = client.db("better-auth-db");
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    console.warn("Falling back to in-memory database");
  }
}

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: googleClientId || "",
      clientSecret: googleClientSecret || "",
      enabled: !!(googleClientId && googleClientSecret),
    },
  },
  database: db ? mongodbAdapter(db, { client }) : undefined,
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  account: {
    accountLinking: {
      enabled: true,
    },
  },
});
