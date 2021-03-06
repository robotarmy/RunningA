require 'test_helper'

class TweetsControllerTest < ActionController::TestCase
  # Replace this with your real tests.
  test "create" do
    count = Tweet.count
    post :create, :tweet => {:json => "{'text':'heya'}"}
    assert { 
      Tweet.count > count
    }
  end
  test "won't create without json" do
    assert {
      rescuing {
        post :create
      }
    }
  end
  test "no duplicate create" do
    post :create, :tweet => {:json => "{'text':'heya'}"}
    assert {
      rescuing {
        post :create, :tweet => {:json => "{'text':'heya'}"}
      }
    }
  end
end
