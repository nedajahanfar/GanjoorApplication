import { z } from "zod";

export const poetSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const poetsArraySchema = z.array(poetSchema);

export type Poet = z.infer<typeof poetSchema>;
