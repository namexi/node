 function myRueqire(path){
//    形参构造函数
    function Moudle(){

        this.exports = {}
    }
    // 读取文件
    var fs = require('fs')
    // 获取文件内容
    var soundCode = fs.readFileSync(path,'utf8')
    // 包装成API
    var package = `(function (exports,moudle){
        ${soundCode}
        moudle.exports = exports 
        return moudle.exports
    })`
    // 解析字符串
    var strObj = eval(package)
    // 创建形参对象
    var moudle = new Moudle()
    // 引入实参
    var obj = strObj(exports,module)

    return obj
}
// Exprots
module.exports = myRueqire