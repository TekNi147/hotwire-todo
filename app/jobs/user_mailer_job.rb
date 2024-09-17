class UserMailerJob < ApplicationJob
  queue_as :default

  def perform(todo)
    # Do something later
    # UserMailer.test_email(todo).deliver_now
    UserMailer.test_email(todo).deliver_now
  end
end
