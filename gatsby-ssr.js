import './src/styles/global.css'
import React from 'react'
import { ThemeProvider } from '@src/context/theme'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import 'gatsby-plugin-prismic-previews/dist/styles.css'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </PrismicPreviewProvider>
)
