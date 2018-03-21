package onion.com.net.util.override

import org.apache.ibatis.executor.Executor
import org.apache.ibatis.mapping.MappedStatement
import org.apache.ibatis.plugin.*
import org.apache.ibatis.session.ResultHandler
import org.apache.ibatis.session.RowBounds
import java.util.*

@Intercepts(Signature(type = Executor::class, method = "query", args = arrayOf(MappedStatement::class, Any::class, RowBounds::class, ResultHandler::class)))
class MyBatisInterceptor: Interceptor {

    private var properties: Properties? = null

    override fun intercept(p0: Invocation?): Any {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun setProperties(p0: Properties?) {
        this.properties = p0
    }

    override fun plugin(p0: Any?): Any {
        return Plugin.wrap(p0, this)
    }
}