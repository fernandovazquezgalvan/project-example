import { relations } from "drizzle-orm";
import { projects, tasks, users } from "./schema";

export const projectRelations = relations(projects, ({ many }) => ({
    tasks: many(tasks),
}));

export const tasksRelations = relations(tasks, ({ one, many }) => ({
    project: one(projects, { fields: [tasks.userId], references: [projects.id] }),
    users: many(users),
}));