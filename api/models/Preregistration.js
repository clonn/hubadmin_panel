module.exports = {
  tableName: 'pre_registration',
  attributes: {
    title: "string",
    description: "string",
    cover: "string",
    registrated: "integer",
    quota: "integer",
    // startDate: "date",
    // endDate: "date"
    users: {
      collection: 'user',
      via: 'preregistrations',
      dominant: true
    }
  }
};
