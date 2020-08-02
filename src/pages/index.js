import React from 'react'
import { SEO } from '../components/seo'
import { Page } from '../layout'
import { Title } from '../components/typography'

const IndexPage = () => (
    <Page>
        <SEO title="Home" />

        <Title>Home</Title>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium velit, fuga obcaecati, et reprehenderit veritatis cum repudiandae asperiores enim possimus molestias cumque ullam delectus, accusantium, autem reiciendis esse placeat labore.</p>
    </Page>
)

export default IndexPage
