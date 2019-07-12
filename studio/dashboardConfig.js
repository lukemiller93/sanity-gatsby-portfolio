export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d27efb321ab9468a0903712',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-42977uej',
                  apiId: '199633c6-8484-4506-b53b-27dd5518df5c'
                },
                {
                  buildHookId: '5d27efb35d582187c07fa130',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sme6fuvj',
                  apiId: 'a8c7a576-97f9-454f-8a94-80f71b1987ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lukemiller93/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sme6fuvj.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
