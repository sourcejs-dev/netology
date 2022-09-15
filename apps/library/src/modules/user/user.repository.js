const User = require('@models/User');

const findByLogin = (login) => User.findOne({ login });
const findById = (id) => User.findOne({ _id: id });
const create = (data) => User.create(data);

module.exports.UserRepository = { findByLogin, findById, create };
