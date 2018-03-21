package onion.com.net.util.override

import onion.com.utils.Help
import org.hibernate.EmptyInterceptor
import org.springframework.stereotype.Component

/**
 * Created by Administrator on 2017/2/28 0028.
 * sql拦截为表加上年月的后缀
 */
@Component
class QueryResInterceptor(val help: Help): EmptyInterceptor() {

    override fun onPrepareStatement(sql: String): String {
        return help.getTableSuffix(sql)
    }

}