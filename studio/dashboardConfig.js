export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60cb7421126d801b3bb3a982',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n6kgi7fb',
                  apiId: '641d6579-753a-4f2b-850f-d9d4b41a64ef'
                },
                {
                  buildHookId: '60cb74217087db23f495bf71',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kotw31tz',
                  apiId: 'e12a5423-a70f-4eb0-b798-930e62733074'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wedagintung/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kotw31tz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
