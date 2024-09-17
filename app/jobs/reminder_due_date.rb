class ReminderDueDate < ApplicationJob
  queue_as :default

  def perform
    todos = Todo.all.where(new_date: Date.today)
    todos.each do |todo|
      UserMailer.test_email(todo).deliver_now
    end
  end
end
