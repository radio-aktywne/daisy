import * as z from "zod";

export const Schemas = {
  UserTraits: z.object({
    locales: z
      .object({
        preferred: z.string().optional(),
      })
      .optional(),
    names: z.object({
      display: z.string(),
    }),
    pictures: z
      .object({
        profile: z
          .object({
            url: z.url().optional(),
          })
          .optional(),
      })
      .optional(),
  }),
};
