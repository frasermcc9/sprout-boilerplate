import "reflect-metadata";
import { Query, Resolver } from "type-graphql";

@Resolver()
export default class TestResolver {
  @Query(() => String)
  async ping(): Promise<string> {
    return "GraphQL Server Pinged 🚀!";
  }

  @Query(() => Number)
  async randomNumber(): Promise<number> {
    return ~~(Math.random() * 10);
  }
}
