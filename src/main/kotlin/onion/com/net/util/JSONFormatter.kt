package onion.com.net.util

import org.springframework.stereotype.Component

@Component
class JSONFormatter {
    /**
     * 格式化

     * @param jsonStr
     * *
     * @return
     */
     fun formatJson(jsonStr: String?): String {
        if (null == jsonStr || "" == jsonStr) return ""
        val sb = StringBuilder()
        sb.append("\n")
        var last = '\u0000'
        var current = '\u0000'
        var indent = 0
        for (i in 0..jsonStr.length - 1) {
            last = current
            current = jsonStr[i]

            //遇到{ [换行，且下一行缩进
            when (current) {
                '{', '[' -> {
                    sb.append(current)
                    sb.append('\n')
                    indent++
                    addIndentBlank(sb, indent)
                }

            //遇到} ]换行，当前行缩进
                '}', ']' -> {
                    sb.append('\n')
                    indent--
                    addIndentBlank(sb, indent)
                    sb.append(current)
                }

            //遇到,换行
                ',' -> {
                    sb.append(current)
                    if (last != '\\') {
                        sb.append('\n')
                        addIndentBlank(sb, indent)
                    }
                }
                else -> sb.append(current)
            }
        }

        return sb.toString()
    }

    /**
     * 添加space

     * @param sb
     * *
     * @param indent
     */
    private fun addIndentBlank(sb: StringBuilder, indent: Int) {
        for (i in 0..indent - 1) {
            sb.append('\t')
        }
    }
}