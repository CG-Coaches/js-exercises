import { FetchColruytClient } from './fetch-colruyt';

describe('fetch-colruyt', () => {
  it('must replace certain occurrences in the content for a given URL', async () => {
    const fetch = jest.fn().mockReturnValue({
      text: () => Promise.resolve('blah blah lidl blah blah'),
    });
    const client = new FetchColruytClient(fetch);
    const result = await client.run('random url');
    expect(result).toEqual('blah blah Colruyt blah blah');
  });
});
