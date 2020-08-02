import React from 'react'
import { SEO } from '../components/seo'
import { Page } from '../layout'
import { Title } from '../components/typography'

const NotFoundPage = () => (
    <Page>
        <SEO title="404: Not found" />
        
        <Title>NOT FOUND</Title>
        
        <p>
            You just hit a route that doesn&#39;t exist... the sadness.
        </p>
    </Page>
)

export default NotFoundPage
