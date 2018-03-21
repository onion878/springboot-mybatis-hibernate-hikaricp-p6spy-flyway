package onion.com.filter

import com.fasterxml.jackson.databind.ObjectMapper
import onion.com.net.util.JSONFormatter
import org.aspectj.lang.JoinPoint
import org.aspectj.lang.annotation.*
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Component
import org.springframework.web.context.request.RequestContextHolder
import org.springframework.web.context.request.ServletRequestAttributes

@Aspect
@Component
class LogAfterAdvice(val jsonFormatter: JSONFormatter) {
    private val jsonMapper = ObjectMapper()

    private val logger = LoggerFactory.getLogger(LogAfterAdvice::class.java
            .name)

    @Pointcut("execution(* onion.com.tgb.service.*.*(..))")
    fun show() = null

    @Before("show()")
    fun Before(jp: JoinPoint) {
        val result = JsonResult()
        try {
            val obj = jp.args
            result.setSuccess(true)
            result.setCode(200)
            result.setMsg("操作成功")
            result.setData(obj)
            logger.info("调用方法前[" + jp.toLongString() + "] 传入相关数据：" + jsonFormatter.formatJson(jsonMapper.writeValueAsString(result)))
        } catch (e: Exception) {
            e.printStackTrace()
        }

    }

    @AfterThrowing(value = "show()", throwing = "e1")
    fun afterThrowing(jp: JoinPoint, e1: Exception) {
        val result = JsonResult()
        try {
            result.setSuccess(false)
            result.setData(jp.args)
            logger.error("(错误)调用方法后[" + jp.toLongString() + "] 返回相关数据：" + jsonFormatter.formatJson(jsonMapper.writeValueAsString(result)))
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    @AfterReturning(value = "show()", returning = "obj")
    fun afterReturning(jp: JoinPoint, obj: Any?){
        val result = JsonResult()
        try {
            result.setSuccess(true)
            result.setCode(200)
            result.setMsg("操作成功")
            result.setData(obj)
            logger.info("调用方法后[" + jp.toLongString() + "] 返回相关数据：" + jsonFormatter.formatJson(jsonMapper.writeValueAsString(result)))
        } catch (e: Exception) {
            e.printStackTrace()
            logger.error("LogAfter:" + e.message)
        }
    }
}