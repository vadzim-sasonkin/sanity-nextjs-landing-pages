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
                  buildHookId: '6100863bb8739f48174eaca7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3sixaop7',
                  apiId: 'c40a6d31-b7c7-4bc4-859b-a1575ad289dc'
                },
                {
                  buildHookId: '6100863cb8739f48954eaa07',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5utzpjgt',
                  apiId: '6d6b0a09-3c0c-4edb-a5e3-d290a9e0d488'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vadzim-sasonkin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5utzpjgt.netlify.app', category: 'apps'}
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
