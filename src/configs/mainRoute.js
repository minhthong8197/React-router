export const mainRoute = [
  {
    path: '/',
    exact: true,
    comp: 'home'
  },
  {
    path: '/posts',
    exact: false,
    comp: 'posts'
  },
  {
    path: '/create-post',
    exact: false,
    comp: 'create-post'
  }
]
