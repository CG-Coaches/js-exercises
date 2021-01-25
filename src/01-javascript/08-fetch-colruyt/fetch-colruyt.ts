/**
 * A service with a method that fetches a certain URL (using the given "fetch" dependency)
 * and replaces all (case-insensitive) occurrences of "Lidl" with "Colruyt".
 */
export class FetchColruytClient {
  constructor(private readonly fetch: any) {
  }

  async run(url: string): Promise<string> {
    // TODO fix me
    return Promise.resolve(url);
  }
}
