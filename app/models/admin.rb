class Admin < ApplicationRecord
    before_save {self.username = username.downcase}
    has_secure_password
end
