
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://neondb_owner:u1FrkvZzq2pL@ep-shy-fog-a511ck2y.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };