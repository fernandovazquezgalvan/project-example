import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema.js";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    // Delete all data

    console.log("Deleting projects");
    await db.delete(schema.projects);
    console.log("Deleting tasks");
    await db.delete(schema.tasks);
    console.log("Deleting users");
    await db.delete(schema.users);

    console.log("Seeding database");

  } catch (error) {
    console.error(error);
  }
};

main();