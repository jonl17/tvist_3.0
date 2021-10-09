const slugify = require('slugify')

const linkResolver = doc => {
  // URL for a category type
  if (doc.type === 'project') {
    return `/verkefni/${slugify(doc.uid)}`
  }

  // URL for a page type
  if (doc.type === 'page') {
    return doc.uid === 'frontpage' ? '/' : `/${doc.uid}`
  }

  if (doc.type === 'project_page') {
    return doc.tags.length > 0
      ? `/verkefnin-okkar/${doc.uid}`
      : '/verkefnin-okkar'
  }

  // Backup for all other types
  return '/' + doc.uid
}

module.exports = {
  linkResolver,
}
