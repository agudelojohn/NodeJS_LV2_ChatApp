const api = require("./../../data/api");
class Message {
  constructor(text, chat, user, creationDate) {
    this.name = "Message";
    this.text = text;
    this.chat = chat;
    this.user = user;
    this.creationDate = creationDate;
  }

  save(text, user, chat) {
    api().saveMessage(text, user, chat);
  }
}

module.exports = new Message();
