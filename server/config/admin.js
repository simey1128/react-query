module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3ca44335848ae3d4fdb2b50ef16e6cd0'),
  },
});
