const slugify = require('slugify')

const linkResolver = doc => {
  console.log(doc)
  // URL for a category type
  if (doc.type === 'project') {
    return `/verkefni/${slugify(doc.uid)}`
  }

  // URL for a page type
  if (doc.type === 'page') {
    return doc.uid === 'frontpage' ? '/' : `/${doc.uid}`
  }

  // Backup for all other types
  return '/'
}

module.exports = {
  linkResolver,
}
