import { useQuery } from "@tanstack/react-query";
import { fetchPoets } from "../modules/fetchPoet";
import { checkPoets } from "../modules/checkPoets";
import type { Poet } from "../modules/poetType";

export function usePoets() {
  return useQuery<Poet[], Error>({
    queryKey: ["poets"],
    queryFn: async () => {
      const data = await fetchPoets();
      return checkPoets(data);
    },
  });
}
