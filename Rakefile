require 'rubygems'
require 'rake'

# gem install sass
# gem install uglifier
# gem install coffee-script

desc 'Compile and Compress CSS/JS'
task :compile do
  system 'sass scss/paper-collapse.scss:paper-collapse.css --style expanded'
  system 'sass scss/paper-collapse.scss:paper-collapse.min.css --style compressed'
end
