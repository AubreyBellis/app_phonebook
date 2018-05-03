class Api::ContactsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @contacts = @user.contacts.all
    
        render json:{user: @user, contacts: @contacts}
      end
    
      def show
        @user = User.find(params[:user_id])
        @contacts = @user.contacts.find params[:id]
    
        render json: @contacts
      end
end
