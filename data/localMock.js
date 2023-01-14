let chats = [
  {
    id: "firstOne",
    users: ["a", "b"],
  },
];
let messages = [
  {
    chatId: "firstOne",
    user: "b",
    text: "Hello",
  },
  {
    chatId: "firstOne",
    user: "a",
    text: "Hi!",
  },
  {
    chatId: "firstOne",
    user: "a",
    text: "Are you ok?",
  },
];

let users = ["a", "b", "c"];

const get = (component, filter) => {
  switch (component.name) {
    case "Message":
      let messagesFound = [];
      if (Object.keys(filter).length !== 0) {
        if (filter.user)
          messagesFound.push(
            messages.filter((msg) => msg.user === filter.user)
          );
        // if (filter.chatId)
        //   messagesFound.push(messages.find((msg) => msg.chatId === filter.chatId));
      } else {
        messagesFound = messages;
      }
      return messagesFound;
  }
};

module.exports = { get };
