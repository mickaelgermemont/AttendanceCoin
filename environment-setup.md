ENVIRONMENT SETUP

--------------------
REQUIREMENTS
--------------------
- git
- Node.js
- npm (installed with Node.js)
- Truffle Framework
- Ganache


--------------------
INSTALLATION GUIDE
--------------------
1. Download and install Node.js and Git using the installers for your Operating System (OS)
    Node.js: available at https://nodejs.org/
    Git: available at https://git-scm.com/downloads
2. Install Ganache
    from the command window (terminal), run "npm install -g ganache-cli"
3. Install Truffle Framework
    from the command window (terminal), run "npm install -g truffle"
4. Go to the desired parent directory where you want to create your project folder.
    from the command window (terminal), run "cd parent_folder_directory" (example: " cd c:/dev/projects/")
5. Once in the parent directory, clone the repository from GitHub:
    from the command window (terminal), run one of the following commands:
    ssh: "git clone git@github.com:mickaelgermemont/AttendanceCoin.git"
    https: "git clone https://github.com/mickaelgermemont/AttendanceCoin.git"


--------------------
RUNNING THE PROJECT
--------------------
1. Open your Ganache application
2. Open a command window (Terminal)
3. Go to the project folder where you cloned the project
    from the command window (terminal), run "cd project_folder_directory" (example: " cd c:/dev/projects/AttendanceCoin")
4. Compile your project
    from the command window (terminal), run "truffle compile"
5. Test your project
    from the command window (terminal), run "truffle test"
6. Migrate your project with Ganache
    from the command window (terminal), run "truffle migrate"
7. Go to the Ganache application, Transactions Tab and check the Contract Creation transaction
