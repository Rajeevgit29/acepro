import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves a project site from /<repo>/, so the base has to match the
// repo it is deployed from. Deriving it from GITHUB_REPOSITORY keeps every remote
// (acepro, acepro-website) working without editing this file per repo.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  plugins: [react()],
  base: repo ? `/${repo}/` : '/',
})
