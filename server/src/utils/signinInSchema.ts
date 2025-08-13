import z from "zod";

const signInSchema = z.object({
  email: z.email({ error: "Email is not valid" }),
  password: z
    .string()
    .min(8, { error: "Password must be atleast 8 characters" })
    .regex(/[a-z]/, {
      error: "Password must be atlease one smallcase character",
    })
    .regex(/[A-Z]/, {
      error: "Password must be atleast one uppercase character",
    })
    .regex(/[@$!%*?&]/, {
      error: "Password must be atleastone special character",
    }),
});
