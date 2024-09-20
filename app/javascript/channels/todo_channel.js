import consumer from "channels/consumer"

consumer.subscriptions.create("TodoChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    Turbo.renderStreamMessage(data.turbo_stream);
    const todoElement = document.getElementById(`todo_${data.id}`);
    if (todoElement) {
      todoElement.remove();
    }
  }
});
