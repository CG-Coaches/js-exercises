import { getArticleSummaries, getSimpleExcerpt } from './articles';

describe('articles', () => {

  describe('getSimpleExcerpt', () => {

    it('must return the same text if length <= 100', () => {
      expect(getSimpleExcerpt('short text')).toEqual('short text');
    });

    it('must return the first 100 characters of a text with length > 100 and then "..."', () => {
      const text = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto';
      expect(getSimpleExcerpt(text)).toEqual('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas...');
    });

  });

  describe('getArticleSummaries', () => {

    const articles = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
    ];

    it('must return an empty array if no articles are given', () => {
      expect(getArticleSummaries([])).toEqual([]);
    });

    it('must return the article summaries', () => {
      expect(getArticleSummaries(articles)).toEqual([
        {
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas...'
        },
        {
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditi...',
        },
        {
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantiu...'
        },
      ]);
    });

  });

});
