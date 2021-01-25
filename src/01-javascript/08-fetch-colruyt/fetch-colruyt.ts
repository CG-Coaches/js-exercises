/**
 * A service with a method that fetches a certain URL (using the given "fetch" dependency)
 * and replaces all (case-insensitive) occurrences of "Lidl" with "Colruyt".
 */
export class FetchColruytClient {
  constructor(private readonly fetch: any) {
  }

  async run(url: string): Promise<string> {
    const text = await this.fetchUrl(url);
    return text.replace(/Lidl/ig, 'Colruyt');
  }

  private async fetchUrl(url: string): Promise<string> {
    const response = await this.fetch(url);
    return response.text();
  }
}
