package onion.com.net.util.override

import onion.com.utils.Help
import org.hibernate.boot.model.naming.Identifier
import org.hibernate.boot.model.naming.PhysicalNamingStrategy
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment
import org.springframework.beans.factory.annotation.Autowired

class LocalNamingStrategy: PhysicalNamingStrategy {

    @Autowired
    private val help = Help()

    override fun toPhysicalColumnName(p0: Identifier?, p1: JdbcEnvironment?) = convert(p0)

    override fun toPhysicalTableName(p0: Identifier?, p1: JdbcEnvironment?) = convertTable(p0)

    override fun toPhysicalSchemaName(p0: Identifier?, p1: JdbcEnvironment?) = convert(p0)

    override fun toPhysicalCatalogName(p0: Identifier?, p1: JdbcEnvironment?) = convert(p0)

    override fun toPhysicalSequenceName(p0: Identifier?, p1: JdbcEnvironment?) = convert(p0)

    private fun convertTable(identifier: Identifier?): Identifier? {
        var newName = identifier?.text
        newName = help.removeTableSuffix(newName)
        return Identifier.toIdentifier(newName)
    }

    private fun convert(identifier: Identifier?): Identifier? {
        var newName = identifier?.text
        return Identifier.toIdentifier(newName)
    }
}