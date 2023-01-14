// Components
const messageRoutes = require("./../components/message/network");

const routes = (app) => {
  app.use("/message", messageRoutes);
};

module.exports = routes;
