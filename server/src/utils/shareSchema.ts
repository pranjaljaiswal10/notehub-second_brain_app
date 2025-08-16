import z from "zod";


export const shareSchema=z.object({
   query:z.object({
    share:z.boolean()
   })
})

export type shareData=z.infer<typeof shareSchema>