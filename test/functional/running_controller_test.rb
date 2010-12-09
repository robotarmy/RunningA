require 'test_helper'

class RunningControllerTest < ActionController::TestCase
  test "index" do
    get :index
    assert { 
     response.status == 200
    }
  end
end
