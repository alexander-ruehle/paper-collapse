require 'rubygems'
require 'rake'
require 'uglifier'
require 'coffee-script'

# gem install therubyracer
# gem install sass
# gem install uglifier
# gem install coffee-script

desc 'Compile and Compress CSS/JS'
task :compile do
  system 'sass scss/paper-collapse.scss:paper-collapse.css --style expanded'
  system 'sass scss/paper-collapse.scss:paper-collapse.min.css --style compressed'

  File.open('paper-collapse.js', 'w') { |file| file.write CoffeeScript.compile(File.read('js/paper-collapse.coffee')) }
  File.open('paper-collapse.min.js', 'w') { |file| file.write Uglifier.compile(File.read('paper-collapse.js')) }
end
