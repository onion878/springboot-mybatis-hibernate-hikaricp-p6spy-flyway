package onion.com.utils

import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.servlet.HandlerExceptionResolver
import org.springframework.web.servlet.ModelAndView
import java.lang.Exception
import java.util.HashMap
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@ControllerAdvice
class ExceptionResolver : HandlerExceptionResolver {

    private val jsonMapper = ObjectMapper()

    @Autowired
    private var help: Help? = null

    @Autowired
    private var reSuccess: reSuccess? = null

    override fun resolveException(request: HttpServletRequest?, response: HttpServletResponse?, obj: Any?, exception: Exception?): ModelAndView {
        var view = ModelAndView()
        if (!(request?.getHeader("accept")?.indexOf("application/json")!! > -1 || request
                ?.getHeader("X-Requested-With") != null && request?.getHeader(
                "X-Requested-With")?.indexOf("XMLHttpRequest")!! > -1)) {
            request?.characterEncoding = "UTF-8"
            response?.characterEncoding = "UTF-8"
            // 如果不是ajax，JSP格式返回
            //为安全起见，只有业务异常我们对前端可见，否则统一归为系统异常
            val map = HashMap<String, Any>()
            val writer = response?.getWriter()
            map.put("success", false)
            map.put("url", request.requestURI)
            if (exception is BusinessException) {
                exception.message?.let { map.put("errorMsg", it) }
            } else {
                map.put("errorMsg", "系统异常")
            }
            //这里需要手动将异常打印出来，由于没有配置log，实际生产环境应该打印到log里面
            exception?.printStackTrace()
            writer?.write("<!DOCTYPE html>" +
                    "<html>" +
                    "<head lang=\"en\">" +
                    "<meta charset=\"UTF-8\" />" +
                    "<title>统一异常处理</title>" +
                    "</head>" +
                    "<body>" +
                    "<center><h3>错误路径:" + request.requestURL + "</h3></center>" +
                    "<center><h3>错误信息:" + map["errorMsg"] + "</h3></center>" +
                    "</body>" +
                    "</html>")
            writer?.flush()
            writer?.close()
        } else {
            request?.characterEncoding = "UTF-8"
            response?.characterEncoding = "UTF-8"
            val writer = response?.getWriter()
            var msg = "";
            exception?.printStackTrace()
            // 为安全起见，只有业务异常我们对前端可见，否则统一归为系统异常
            if (exception is BusinessException) {
                msg = exception.message.toString()
            } else {
                msg = "系统异常!"
            }
            writer?.write(reSuccess?.toFail(msg))
            writer?.flush()
            writer?.close()
        }
        return view
    }
}