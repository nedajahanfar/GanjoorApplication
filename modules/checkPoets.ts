import type { Poet } from "./poetType";

export function checkPoets(data: any): Poet[] {
  if (!Array.isArray(data)) {
    throw new Error("Invalid data: expected an array of poets");
  }

  data.forEach((poet) => {
    if (typeof poet.id !== "number" || typeof poet.name !== "string") {

      throw new Error(`Invalid poet structure: ${JSON.stringify(poet)}`);
    }
  });

  return data as Poet[];
}
