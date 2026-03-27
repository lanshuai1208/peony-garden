import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'React Component Library',
    description: 'A comprehensive React component library for both PC and mobile platforms',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'PC Components', link: '/pc/' },
            { text: 'Mobile Components', link: '/mobile/' },
            { text: 'Shared Utils', link: '/shared/' }
        ],
        sidebar: {
            '/pc/': [
                { text: 'Introduction', link: '/pc/' },
                { text: 'Button', link: '/pc/button' },
                { text: 'Input', link: '/pc/input' }
            ],
            '/mobile/': [
                { text: 'Introduction', link: '/mobile/' },
                { text: 'Button', link: '/mobile/button' },
                { text: 'Input', link: '/mobile/input' }
            ],
            '/shared/': [
                { text: 'Introduction', link: '/shared/' },
                { text: 'Utilities', link: '/shared/utils' }
            ]
        }
    }
})