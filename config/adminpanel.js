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
                    title: 'Email',
                    Content: 'Active',
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
        }
    }
};