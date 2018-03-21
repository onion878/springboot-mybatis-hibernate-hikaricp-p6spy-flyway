package onion.com

import org.mybatis.spring.annotation.MapperScan
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
@MapperScan("onion.com.tgb.dao")
class Application

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
