exports.linkResolver = (doc) => {
    // URL for a category type
    if (doc.type === 'category') {
      return `/category/${doc.uid}`
    }
  
    // URL for a product type
    if (doc.type === 'product') {
      return `/product/${doc.uid}`
    }
  
    // URL for a page type
    if (doc.type === 'page') {
      return `src/pages/${doc.uid}`
    }

    // URL for a blog type
    if (doc.type === 'blog-post') {
      return `src/pages/blog`
    }
  
    // Backup for all other types
    return '/'
  }