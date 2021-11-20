import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

type Props = {
  children?: ReactNode
  title?: string
}

export const siteTitle = 'Iglesia Bautista Estrella de Belén'
export const siteTitleSigla = 'IBEB'

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="site-content">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="og:title" content={siteTitleSigla} />
      <link href="fonts/font-awesome.min.css" rel="stylesheet" type="text/css" />

    </Head>
	  <Header title={siteTitle} />
    {children}
    <Footer />
  </div>
)

export default Layout
