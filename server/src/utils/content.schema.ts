import z from "zod";


export const contentSchema = z.object({
  body:z.object({
    title: z.string(),
    link: z.url(),
    type: z.enum(["image", "video", "article", "audio"]),
    tag:z.array(z.string())
}),params:z.object({
  id:z.string()
})
});

export  type contentInput=z.infer<typeof contentSchema>