/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  '/create': { view: 'post/create' },

  '/register' : 'UserController.index',

  '/login'    : 'SessionController.index',

  '/groups'    : 'GroupsController.index',

  '/logout'   : {
    controller: 'session',
    action: 'destroy'
  },

  'get /groups/list': {
    controller: 'groups',
    action: 'list'
  },

  'post /groups/create': {
    controller: 'groups',
    action: 'create'
  },

  'post /session/create': {
    controller: 'session',
    action: 'create'
  },

  'post /user/create': {
    controller: 'user',
    action: 'create'
  },

  'post /post/create': {
    controller: 'post',
    action: 'create'
  },

  'get /post/delete/:id': {
    controller: 'post',
    action: 'delete'
  },

  'get /post/clear': {
    controller: 'post',
    action: 'clear'
  },

  'post /post/update': {
    controller: 'post',
    action: 'update'
  },

  'get /post/:page': {
    controller: 'post', // Контроллер
    action: 'page' // Действие
  },
  'get /post/watch/:id': {
    controller: 'post', // Контроллер
    action: 'watch' // Действие
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
