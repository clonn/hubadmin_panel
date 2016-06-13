'use strict';

module.exports.adminpanel = {
  assets: 'copy',
  instances: {
    users: {
      title: 'Users',
      model: 'User',

      list: {
        fields: {
          preregistrations: false,
          createdAt: false,
          updatedAt: false,
        }
      },
      edit: {
        fields: {
          preregistrations: false,
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
          title: 'Post Title',
          cover: false,
          createdAt: false,
          updatedAt: false,
        }
      },
      add: {
        fields: {
          id: 'ID',
          title: 'Post Title',
          createdAt: false,
          updatedAt: false,
        }
      },

      edit: {
        fields: {
          title: 'Post Title',
          createdAt: false,
          updatedAt: false,
        }
      }
    },

    GameList: {
      title: 'GameLists',
      model: 'GameList',
      list: {
        fields: {
          title: 'GameList Title',
          createdAt: false,
          updatedAt: false,
        }
      },
      add: {
        fields: {
          title: 'GameList Title',
          createdAt: false,
          updatedAt: false,
        }
      },
      edit: {
        fields: {
          title: 'GameList Title',
          createdAt: false,
          updatedAt: false,
        }
      }
    },
    Preregistration: {
      title: 'Preregistrations',
      model: 'Preregistration',
      list: {
        fields: {
          title: 'Preregistration title',
          users: {
            displayField: 'email'
          },
          cover: false,
          createdAt: false,
          updatedAt: false,
        }
      },
      view: {
        fields: {
          title: 'Preregistration title',
          users: {
            displayField: 'email'
          },
          createdAt: false,
          updatedAt: false,
        }
      },
      add: {
        fields: {
          title: 'Preregistration title',
          users: {
            displayField: 'email'
          },
          createdAt: false,
          updatedAt: false,
        }
      },
      edit: {
        fields: {
          title: 'Preregistration title',
          users: {
            displayField: 'email'
          },
          createdAt: false,
          updatedAt: false,
        }
      },
    },
  },


};
