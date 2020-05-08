export default {
  widgets: [
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
                  buildHookId: '5eb50badc356e42261ba01d1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pd4ghafg',
                  apiId: '685001b5-105a-4418-bb44-1a8cc149c9e2'
                },
                {
                  buildHookId: '5eb50bad4120e8ba8b8a1ba6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7a1omoru',
                  apiId: '28f87404-7c63-4a5c-b004-c9b1889c96d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moximoti/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7a1omoru.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
