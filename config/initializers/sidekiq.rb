require 'sidekiq'
require 'sidekiq-cron'

Sidekiq::Cron::Job.create(
  name: 'remind every 9 am',
  cron: '0 9 * * *',
  class: 'ReminderDueDate'
)
