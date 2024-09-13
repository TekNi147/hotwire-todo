class AddUserDetailsToTodos < ActiveRecord::Migration[7.2]
  def change
    add_column :todos, :user_name, :string
    add_column :todos, :user_email, :string
  end
end
