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

      def create

        @contact = Contact.new(contact_params)
        @contact.save
        # redirect_to api_user_contacts_path

      end
  
      def update

        @contact = Contact.find(params[:id])
        @contact.update(contact_params)
        render json: @contact

      end

      def destroy

        @contact= Contact.find params[:id]
        @contact.destroy

    end

    private
    def contact_params
        contact_params = params.require(:contact).permit(:first_name, :last_name, :phone_number)
    end
end
