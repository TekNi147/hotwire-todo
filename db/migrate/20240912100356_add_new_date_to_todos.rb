class AddNewDateToTodos < ActiveRecord::Migration[7.2]
  def change
    add_column :todos, :new_date, :date
  end
end
