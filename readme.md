CI via Jenkins
---------------
An attempt to configure and run a simple job 
>> 1. Take the code form git
>> 2. Get dependencies via npm install (installs gulp)
>> 3. Run the gulp default command

Setup was successful
--------------------
In jenkins install node config and git config

Git will be used to get data from git
And node as you might be using node dependencies to use local node give node path only which is used as prefix by npm
execute "npm config get prefix" to get the same 

>> Test Polling on git push
