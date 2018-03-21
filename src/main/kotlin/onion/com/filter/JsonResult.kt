package onion.com.filter

import java.util.ArrayList

class JsonResult {
    private var success: Boolean = false

    private var code: Any? = null

    fun isSuccess(): Boolean {
        return success
    }


    fun setSuccess(success: Boolean) {
        this.success = success
    }


    fun getCode() = code



    fun setCode(code: Any) {
        this.code = code
    }


    fun getMsg()= msg


    fun setMsg(msg: String) {
        this.msg = msg
    }


    private var msg: String? = null
    private var data: List<*>? = null
    fun getData()= data


    fun setData(data: Any?) {
        if (data is List<*>) {
            this.data = data
        } else if(data == null){
            this.msg = "没有返回数据"
        } else {
            val list = ArrayList<Any>()
            list.add(data)
            this.data = list
        }
    }
}