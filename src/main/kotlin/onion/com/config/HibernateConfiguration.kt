package onion.com.config

import onion.com.net.util.override.QueryResInterceptor
import onion.com.tgb.dao.GenericDao
import onion.com.utils.Help
import org.hibernate.SessionFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.orm.hibernate5.HibernateTransactionManager
import org.springframework.orm.hibernate5.LocalSessionFactoryBean
import java.util.*
import javax.sql.DataSource

@Configuration
class HibernateConfiguration {

    @Bean
    fun DataSource.sessionFactory(@Value("\${mybatis.type-aliases-package}") packageScan: String, @Value("\${spring.jpa.properties.hibernate.dialect}") dialect: String,
                                            @Value("\${spring.jpa.show-sql}") showSql: String,
                                            @Value("\${spring.jpa.properties.hibernate.format_sql}") formatSql: String,
                                            @Value("\${spring.jpa.properties.hibernate.use_sql_comments}") useSqlComments: String,
                                            @Value("\${spring.jpa.hibernate.ddl-auto}") ddlAuto: String): LocalSessionFactoryBean {
        val localSessionFactoryBean = LocalSessionFactoryBean()
        localSessionFactoryBean.setDataSource(this)
        localSessionFactoryBean.setPackagesToScan(packageScan)
        val properties = Properties()
        properties.setProperty("hibernate.dialect", dialect)
        properties.setProperty("hibernate.show_sql", showSql)
        properties.setProperty("hibernate.format_sql", formatSql)
        properties.setProperty("hibernate.use_sql_comments", useSqlComments)
        properties.setProperty("hibernate.hbm2ddl.auto", ddlAuto)
        localSessionFactoryBean.hibernateProperties = properties
        localSessionFactoryBean.setEntityInterceptor( QueryResInterceptor(help = Help()) )
        return localSessionFactoryBean
    }


    @Bean
    fun SessionFactory.transactionManager(): HibernateTransactionManager {
        val transactionManager = HibernateTransactionManager()
        transactionManager.sessionFactory = this
        return transactionManager
    }

}