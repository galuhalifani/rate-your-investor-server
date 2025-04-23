const newsapi = require('../3rd-party-api/newsApi.js');

class Controller {
    static getNews(req, res, next) {
        newsapi.v2.topHeadlines({
            category: ['technology', 'business'],
            language: 'en',
            pageSize: 6,
          })
          .then(response => {
            res.status(200).json(response.articles)
          })
          .catch(err => {
            next({ code: 500, message: err.message })
          })
    }
}

module.exports = Controller