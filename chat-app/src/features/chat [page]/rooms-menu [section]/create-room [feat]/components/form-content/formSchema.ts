import {z} from "zod";

export const createRoomSchema = z.object({
    name: z.string().min(1, "Room name is required"),
    description: z.string(),
    canEveryoneJoin: z.boolean(),
    limitUsers: z.boolean(),
    maxMembers: z.string().nullable().optional(),
}).superRefine((data, ctx) => {
    // Max members check
    if (data.limitUsers && (!data.maxMembers || data.maxMembers.trim() === "")) {
        ctx.addIssue({
            path: ["maxMembers"],
            code: z.ZodIssueCode.custom,
            message: "Max members is required when user limit is enabled",
        });
    }
});