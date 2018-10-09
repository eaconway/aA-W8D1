class AddLong < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :lng, :float, null:false
  end
end
