import z from "zod/v4";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(3, { error: "Password must be atleast 3 character" }),
  email: z.email({ error: "Email is not valid" }),
  password: z
    .string()
    .min(8, { error: "Password must be atleast 8 characters" })
    .regex(/[A-Z]/, {
      error: "Password must be atleast one uppercase character",
    })
    .regex(/[0-9]/, { error: "Password must be atleat one numeric character" })
    .regex(/[a-z]/, {
      error: "Password must be atleast one lowercase character",
    }).regex(/[@$!%*?&]/,{error:"Password must be atleast one special character"})
});

export type signInInput=z.infer<typeof signUpSchema>