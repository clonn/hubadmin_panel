'use strict';

module.exports.adminpanel = {
  instances: {

    users: {

      title: 'Users',
      model: 'User',

      list: {
        fields: {
          id: 'ID',
          email: 'Email',
          active: 'Active',
          admin: 'Admin',
          createdAt: 'Created'
        }
      },
      edit: {
        fields: {
          email: 'Email',

          active: {
            title: 'Active'
          },
          admin: {
            title: 'Admin',
            disabled: true
          }
        }
      }
    },

    Post: {

      title: 'Posts',
      model: 'Post',

      list: {
        fields: {
          id: 'ID',
          title: 'Post Title',
          content: 'Post Content',
          auth: 'Post Author',
          createdAt: 'Created'
        }
      },
      add: {
        fields: {
          id: 'ID',
          title: 'Post Title',
          content: 'Post Content',
          auth: 'Post Author',
          // createdAt: 'Created'
        }
      },

      edit: {
        fields: {
          title: 'Post Title',
          content: 'Post Content',
          auth: 'Post Author',
          // createdAt: {
          //     disabled: true
          // }
          // active: {
          //     title: 'Active'
          // },
          // admin: {
          //     title: 'Admin',
          //     disabled: true
          // }
        }
      }
    },

    GameList: {
      title: 'GameLists',
      model: 'GameList',
      list: {
        fields: {
          id: 'ID',
          title: 'GameList Title',
          like: 'Like',
          count: 'Count',
          createdAt: 'Created'
        }
      },
      add: {
        fields: {
          title: 'GameList Title',
          like: 'Like',
          count: 'Count',
        }
      },
      edit: {
        fields: {
          title: 'GameList Title',
          like: 'Like',
          count: 'Count',
        }
      }
    },
    Preregistration: {
      title: 'Preregistrations',
      model: 'Preregistration',
      list: {
        fields: {
          id: 'ID',
          title: 'Preregistration title',
          description: 'description',
          cover: 'cover',
          registrated: 'registrated',
          quota: 'quota',
        }
      },
      add: {
        fields: {
          title: 'Preregistration title',
          description: 'description',
          cover: 'cover',
          registrated: 'registrated',
          quota: 'quota',
        }
      },
      edit: {
        fields: {
          title: 'Preregistration title',
          description: 'description',
          cover: 'cover',
          registrated: 'registrated',
          quota: 'quota',
        }
      },
    },
  },


};
