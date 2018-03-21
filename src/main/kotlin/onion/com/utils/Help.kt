package onion.com.utils

import org.springframework.stereotype.Component
import java.text.SimpleDateFormat
import java.util.*

@Component
class Help {

    fun getTableSuffix(sql: String): String {
        var sql = sql
        if (sql.contains("$(")) {
            sql = sql.replace("\\$\\(number\\)".toRegex(), "")
        }
        return sql
    }

    fun removeTableSuffix(sql: String?): String? {
        var sql = sql
        if (sql != null) {
            if (sql.contains("$(")) {
                val format = sql.substring(sql.indexOf("$(") + 2, sql.indexOf(")"))
                sql = sql.replace("$($format)", "")
            }
        }
        return sql
    }

    /**
     * 得到当前年月日时分秒（String）

     * @return
     */
    fun getNow(): String {
        val currentTime = Date()
        val formatter = SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
        val date = formatter.format(currentTime)
        return date
    }
}