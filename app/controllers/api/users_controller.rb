class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users

      end

    def show
        @user = User.find params[:id]
        @contacts = @user.contacts.all
        render json: {user: @user, 
                    contacts: @contacts}
        end

    def create
        @user = User.create!(user_params)
        redirect_to api_user_path(@user)

        end

    def update
        @user = User.find params[:id]
        @user.update(user_params)
    
        end

    def destroy
        @user = User.find params[:id]
        @user.destroy

        end

    private
    def user_params
       user_params = params.require(:user).permit(:first_name, :last_name, :email)
    end
end