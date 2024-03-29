import "dotenv";

declare module "dotenv" {
  interface DotenvParseOutput {
    //! Users
    user1: string;
    user2: string;
    user3: string;
    user4: string;
    user5: string;

    apiKeyOpTestnet: string;
  }
}
