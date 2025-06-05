import {z} from "zod";

export const createRoomSchema = z.object({
    name: z.string().min(1, "Room name is required"),
    description: z.string(),
    canEveryoneJoin: z.boolean(),
    passwordProtection: z.boolean(),
    password: z.string().optional(),
    limitUsers: z.boolean(),
    maxMembers: z.string().nullable().optional(),
    expiryEnabled: z.boolean(),
    expiryDate: z.string().optional(),
}).superRefine((data, ctx) => {
    // Expiry date check
    if (data.expiryEnabled && (!data.expiryDate || data.expiryDate.trim() === "")) {
        ctx.addIssue({
            path: ["expiryDate"],
            code: z.ZodIssueCode.custom,
            message: "Expiry date is required when expiry is enabled",
        });
    }

    // Max members check
    if (data.limitUsers && (!data.maxMembers || data.maxMembers.trim() === "")) {
        ctx.addIssue({
            path: ["maxMembers"],
            code: z.ZodIssueCode.custom,
            message: "Max members is required when user limit is enabled",
        });
    }

    // Password check
    if (data.passwordProtection && (!data.password || data.password.trim() === "")) {
        ctx.addIssue({
            path: ["password"],
            code: z.ZodIssueCode.custom,
            message: "Password is required when password protection is enabled",
        });
    }
});

export const stepFieldsMap = {
    basicInfo: ['name', 'description'],
    settings: ['canEveryoneJoin', 'passwordProtection', 'password'],
    limits: ['limitUsers', 'maxMembers', 'expiryEnabled', 'expiryDate'],
};