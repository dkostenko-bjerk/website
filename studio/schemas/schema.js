// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Object types
import CTABox from './objects/homepage/CTABox'
import intro from './objects/homepage/intro'

import richText from './objects/richText'
import pageContent from './objects/pageContent'
import contentEditor from './objects/contentEditor'
import link from './objects/link'

// Document types
import homepage from './documents/homepage'
import servicesPage from './documents/services-page'
import aboutCompanyPage from './documents/about-company-page'
import contactsPage from './documents/contacts-page'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Objects */
    CTABox,
    intro,
    
    richText,
    pageContent,
    link,
    // columnLayout,
    contentEditor,
    /* Documents */
    homepage,
    servicesPage,
    aboutCompanyPage,
    contactsPage
  ]),
})
