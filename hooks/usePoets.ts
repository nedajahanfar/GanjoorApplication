import { useQuery } from "@tanstack/react-query";
import { fetchPoets } from "../modules/fetchPoet";
import { poetsArraySchema, Poet } from "../modules/poetSchema";

export function usePoets() {
  return useQuery<Poet[], Error>({
    queryKey: ["poets"],
    queryFn: async () => {
      const data = await fetchPoets();
      return poetsArraySchema.parse(data); // Zod validation!
    },
  });
}
