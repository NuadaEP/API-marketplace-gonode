const Mail = require('../services/Mail')

class PurchaseMail {
  // To get with something like this: PurchaseMail.key
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { ad, user, content } = job.data
    await Mail.sendMail({
      from: '"Your own marketplace" <your_own@marketplace.com>',
      to: ad.author.email,
      subject: `Buy notification: ${ad.title}`,
      template: 'purchase',
      context: {
        user,
        content,
        ad
      }
    })

    return done()
  }
}

module.exports = new PurchaseMail()
