import { Application } from "@hotwired/stimulus"
import UserSelectController from "./controllers/user_select_controller"

const application = Application.start()
application.register("user-select", UserSelectController)