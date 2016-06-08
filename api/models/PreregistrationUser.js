module.exports = {
  tableName: 'pre_registration_user',
  attributes: {
    preregistrationId:{
      model:'preregistration'
    },
    userId: {
      model: 'user'
    }
  }
}