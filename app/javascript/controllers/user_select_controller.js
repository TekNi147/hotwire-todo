import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["email", "name"]

  connect() {
    console.log("User Select Controller connected")
    const userSelect = document.getElementById("todo_user_id")
    if (userSelect && userSelect.value) {
      this.fetchEmailAndName({ target: userSelect })
    }
  }

  fetchEmailAndName(event) {
    const userId = event.target.value
    console.log("Selected User ID:", userId)

    if (userId) {
      fetch(`/users/${userId}/info`)
        .then(response => response.json())
        .then(data => {
          console.log("User Data:", data)
          this.emailTarget.value = data.email
          this.nameTarget.value = data.name
        })
        .catch(error => {
          console.error("Error fetching user info:", error)
        })
    } else {
      this.emailTarget.value = ""
      this.nameTarget.value = ""
    }
  }
}