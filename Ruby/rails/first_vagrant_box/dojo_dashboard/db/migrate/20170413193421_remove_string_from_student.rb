class RemoveStringFromStudent < ActiveRecord::Migration
  def change
    remove_column :students, :string, :string
  end
end
