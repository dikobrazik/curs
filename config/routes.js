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

  '/user' : 'UserController.index',

  '/login'    : 'SessionController.index',

  '/groups'    : 'GroupsController.index',

  '/edu'    : 'EducationController.index',

  'GET /csrfToken': { action: 'security/grant-csrf-token' },
  
  /*
  *      /SESSION/....
  */
  'post /session/create': {
    controller: 'session',
    action: 'create'
  },
  '/logout'   : {
    controller: 'session',
    action: 'destroy'
  },
  /*
  *      /LESSONS/....
  */
  'post /lessons/update': {
    controller: 'lesson',
    action: 'update'
  },
  'get /lessons': {
    controller: 'lesson',
    action: 'list'
  },
  /*
  *      /EDUCATION/....
  */
  'post /edu/create': {
    controller: 'education',
    action: 'create'
  },
  'post /edu/update': {
    controller: 'education',
    action: 'update'
  },
  'get /edu/list/:index': {
    controller: 'education',
    action: 'timetable'
  },//группы в которых преподает данный препод
  'get /edu/groups': {
    controller: 'education',
    action: 'teacherGroups'
  },
  /*
  *      /GROUPS/....
  */
  'get /groups/list:index': {
    controller: 'groups',
    action: 'list'
  },

  'post /groups/create': {
    controller: 'groups',
    action: 'create'
  },

  'post /groups/update': {
    controller: 'groups',
    action: 'update'
  },

  'post /groups/deleteElement': {
    controller: 'groups',
    action: 'deleteElement'
  },

  /*
  *      /USER/....
  */
  'post /user/create': {
    controller: 'user',
    action: 'create'
  },
  'post /user/delete': {
    controller: 'user',
    action: 'delete'
  },
  'post /user/update': {
    controller: 'user',
    action: 'update'
  },
  'get /user/list': {
    controller: 'user',
    action: 'list'
  },
  'get /user/info': {
    controller: 'user',
    action: 'info'
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
