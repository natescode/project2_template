import { User } from '../models/User.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'alice@wonderland.com', password: 'password' },
    { username: 'bob@thebuilder.com', password: 'password' },
    { username: 'charlie@chocolatefactory.com', password: 'password' },
  ], { individualHooks: true });
};