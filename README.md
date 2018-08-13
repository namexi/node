# mr包

  - This is the load module package of NodeJs, which is evolved from the core module of NodeJs. Define the members in the module which need to be exporetd by expors, that is exposed to other modules for use。ways like below:


  - a.js

    ```JavaScript
        var mr = require('mr')    //It returns an object
        mr('./b.js')  //The value and object defined in exprots are returned
    ```
 
 
  - b.js

    ```JavaScript
        exports = 123
        exports = funcyion(){
            console.log('hello')
        }
    ```
  - It also has disadvantages like how  to avoid been overridden,  The final completion looks like a defining member exposed to the file domain.