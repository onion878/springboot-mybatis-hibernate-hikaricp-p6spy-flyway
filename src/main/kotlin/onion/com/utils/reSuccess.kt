package onion.com.utils

import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.HashMap

@Component
class reSuccess {
    private val jsonMapper = ObjectMapper()

    @Autowired
    val help: Help ?= null

    @Throws(Exception::class)
    fun toSuccess(value: String, data: Any?): Any {
        val jsonMap = HashMap<String, Any>()
        jsonMap.put("success", true)
        jsonMap.put("val", value)
        if (data != null) {
            jsonMap.put("data", data)
        } else {
            jsonMap.put("data", "没有返回数据");
        }
        help?.getNow()?.let { jsonMap.put("date", it) }
        return jsonMap
    }

    @Throws(Exception::class)
    fun toFail(msg: String): String {
        val jsonMap = HashMap<String, Any>()
        jsonMap.put("success", false)
        jsonMap.put("msg", msg)
        help?.getNow()?.let { jsonMap.put("date", it) }
        return jsonMapper.writeValueAsString(jsonMap)
    }

    @Throws(Exception::class)
    fun toString(jsonMap: Any): String {
        return jsonMapper.writeValueAsString(jsonMap)
    }

    @Throws(Exception::class)
    fun toList(rows: List<Any>, total: Long): Any {
        val jsonMap = HashMap<String, Any>()
        jsonMap.put("rows", rows)
        jsonMap.put("total", total)
        help?.getNow()?.let { jsonMap.put("date", it) }
        return jsonMap
    }

}