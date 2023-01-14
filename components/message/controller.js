const api = require("./../../data/api");
const MessageClass = require("./class");
const addMessage = (chat, user, text) => {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !text) reject("Incorrect data");
    resolve("Added message");
  });
};

const getMessages = (filter) => {
  return new Promise(async (resolve, reject) => {
    const messages = await api().getData(MessageClass, filter);
    resolve(messages);
  });
};

module.exports = { addMessage, getMessages };
