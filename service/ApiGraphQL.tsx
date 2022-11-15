import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../src/graphql/queries";
import { Data } from "../types";



class ApiGraphQL {
  /**
   * getAllContacts
   */
  public async getAllContacts() {
    try {
      const result = (await API.graphql(graphqlOperation(listUsers))) as Data
      const users = result.data.listUsers.items
      return users
    } catch (error) {
      throw new Error("Error in getAllContacts");
    }
  }
}
export { ApiGraphQL }