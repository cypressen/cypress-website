// suspending
import { z } from "zod";
const envSchema = z.object({
    SUPABASE_URL: z.string().trim().min(1),
    SUPABASE_KEY: z.string().trim().min(1),
});

const parsedVariables = envSchema.safeParse(process.env);
if (!parsedVariables.success) {
    throw new Error(
        "Fail to parse environment variables: " + JSON.stringify(parsedVariables.error.format(), null, 2)
    );
}


export const env = parsedVariables.data;

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> { }
    }
}
