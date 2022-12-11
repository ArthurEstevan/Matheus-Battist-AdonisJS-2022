import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

  Route.get('/', async () => {
    return { hello: 'world' }
  })
  
  Route.resource('/moments', 'MomentsController').apiOnly()

  Route.post('/moments/:momentId/comment', 'CommentsController.store')

}).prefix('/api')
