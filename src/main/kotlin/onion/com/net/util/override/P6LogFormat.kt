package onion.com.net.util.override

import com.p6spy.engine.common.P6Util
import com.p6spy.engine.spy.appender.SingleLineFormat
import org.hibernate.engine.jdbc.internal.BasicFormatterImpl

class P6LogFormat : SingleLineFormat() {
    val formatter = BasicFormatterImpl()
    val p6log = ThreadLocal<Int>()

    override fun formatMessage(connectionId: Int, now: String?, elapsed: Long, category: String?, prepared: String?, sql: String?): String {
        val t = Thread.currentThread()

        if (p6log.get() == 1) {
            p6log.set(0)
            return now + "|" + t.name + "|" +
                    "" + elapsed + "|" +
                    "" + category + "|connection " +
                    "" + connectionId + "|" +
                    "\n After Prepared SQL:" + formatter.format(P6Util.singleLine(prepared)) +
                    "\n Before Prepared SQL:" + formatter.format(P6Util.singleLine(sql))
        } else {
            p6log.set(1)
            return "\t"
        }

    }
}