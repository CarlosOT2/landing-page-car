export type FooterRoute = {
    key: string
    links: { key: string; to: string }[]
}

export default [
    {
        key: 'vehicles',
        links: [
            { key: 'new', to: '#' },
            { key: 'semi-new', to: '#' },
        ],
    },
    {
        key: 'services',
        links: [
            { key: 'maintenance', to: '#' },
            { key: 'bodywork', to: '#' },
            { key: 'oil-change', to: '#' },
            { key: 'accessories', to: '#' },
        ],
    },
    {
        key: 'about',
        links: [
            { key: 'story', to: '#' },
            { key: 'work-with-us', to: '#' },
            { key: 'location', to: '#' },
        ],
    },
] as FooterRoute[]