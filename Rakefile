require 'rubygems'
require 'rake'

desc 'Compile CSS'
task :compile do
  system 'sass scss/paper-collapse.scss:paper-collapse.css --style expanded'
  system 'sass scss/paper-collapse.scss:paper-collapse.min.css --style compressed'
end
