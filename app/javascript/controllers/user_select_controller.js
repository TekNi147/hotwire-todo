// app/javascript/controllers/user_select_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["email"]

  connect() {
    console.log("User controller connected")
    console.log("Email target:", this.hasEmailTarget ? this.emailTarget : "Not found")
    const userSelect = document.getElementById("todo_user_id")
    if (userSelect && userSelect.value) {
      this.fetchEmail({ target: userSelect })
    }
  }

  fetchEmail(event) {
    const userId = event.target.value
    console.log("Selected User ID:", userId)

    if (userId) {
      fetch(`/users/${userId}/email`)
        .then(response => response.json())
        .then(data => {
          console.log("Email Data:", data)
          this.emailTarget.value = data.email
        })
        .catch(error => {
          console.error("Error fetching email:", error)
        })
    } else {
      this.emailTarget.value = ""
    }
  }
}