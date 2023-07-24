SERVER steps :
npm init

replace scripts of package.json
"start": "nodemon index.js",
 "server": "nodemon index.js"

also "type": "module", in package.json

npm i mongodb mongoose express nodemon body-parser cors dotenv