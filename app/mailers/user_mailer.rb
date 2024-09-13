class UserMailer < ApplicationMailer
  default from: 'thitinan.ph@kkumail.com'

  def test_email(todo)
    @todo_name = todo.name
    @user_email = todo.user_email
    @user_name = todo.user_name

    mail(to: @user_email, subject: 'ยินดีต้อนรับสู่เว็บไซต์ที่ยอดเยี่ยมของฉัน')
  end
end
