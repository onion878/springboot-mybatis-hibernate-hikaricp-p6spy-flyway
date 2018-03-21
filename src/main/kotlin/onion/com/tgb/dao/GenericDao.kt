package onion.com.tgb.dao

import onion.com.tgb.model.Page
import org.hibernate.SessionFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.orm.hibernate5.support.HibernateDaoSupport
import java.io.Serializable
import java.lang.reflect.ParameterizedType
import java.util.HashMap

open class GenericDao<T, PK: Serializable>: HibernateDaoSupport() {

    @Autowired
    fun InitSession(sessionFactory: SessionFactory) {
        setSessionFactory(sessionFactory)
    }

    var clazz = (javaClass.genericSuperclass as ParameterizedType).actualTypeArguments[0] as Class<T>;

    open fun save(entity: T):T {
        hibernateTemplate.save(entity)
        return entity
    }

    open fun findById(id: PK) = hibernateTemplate.get(clazz, id);

    open fun update(entity: T):T {
        hibernateTemplate.update(entity)
        return entity
    }

    open fun update(hql: String) {
        val session = sessionFactory.currentSession
        val query = session.createQuery(hql)
        query.executeUpdate()
    }

    open fun updateField(entity: T): Any {
        val session = sessionFactory.currentSession
        return session.merge(entity)
    }

    open fun delete(hql: String) {
        val session = sessionFactory.currentSession
        val query = session.createQuery(hql)
        query.executeUpdate()
    }

    open fun insert(hql: String) {
        val session = sessionFactory.currentSession
        val query = session.createQuery(hql)
        query.executeUpdate()
    }

    open fun selectAll(hql: String): MutableList<T> {
        val session = sessionFactory.currentSession
        val list = session.createQuery(hql).list()
        return list as MutableList<T>
    }

    open fun updateField(field: String, entity: T):T {
        hibernateTemplate.update(field, entity)
        return entity
    }

    open fun saveOrUpdate(entity: T):T {
        hibernateTemplate.saveOrUpdate(entity)
        return entity
    }

    open fun saveOrUpdateList(entities: MutableList<T>) {
        for (t in entities) {
            hibernateTemplate.saveOrUpdate(t)
        }
    }

    open fun delete(entity: T):T {
        hibernateTemplate.delete(entity)
        return entity
    }

    open fun deleteAll(entities: MutableList<T>) {
        hibernateTemplate.deleteAll(entities)
    }

    open fun findAll() = hibernateTemplate.find("from " + clazz.name) as MutableList<T>;

    open fun listByPage(page: Page): Map<String, Any> {
        val map = HashMap<String, Any>()
        map.put("total", getTotal(page))
        map.put("rows", getAll(page))
        map.put("page", page.page)
        map.put("size", page.rows)
        return map as Map<String, Any>
    }

    open fun getAll(page: Page): MutableList<T> {
        val session = sessionFactory.currentSession
        var hql = "from " + clazz.name + " "
        if (page.value != null && page.value.trim { it <= ' ' } != "")
            hql = hql + " where " + page.search + " LIKE ? "
        if (page.order != null && page.order.trim { it <= ' ' } != "")
            hql = hql + page.order + " "
        val q = session.createQuery(hql)
        if (page.value != null && page.value.trim { it <= ' ' } != "")
            q.setParameter(0, "%" + page.value + "%")
        q.setFirstResult((page.page - 1) * page.rows)
        q.setMaxResults(page.rows)
        return q.list() as MutableList<T>
    }

    open fun listByEntity(entity: T, page: Int, rows: Int) = hibernateTemplate.findByExample(entity, (page - 1) * rows, rows);

    open fun listByEntity(entity: T) = hibernateTemplate.findByExample(entity);

    open fun getTotal(page: Page): Long {
        val session = sessionFactory.currentSession
        var hql = "select count(0) from " + clazz.name + " "
        if (page.value != null && page.value.trim { it <= ' ' } != "")
            hql = hql + " where " + page.search + " LIKE ? "
        val q = session.createQuery(hql)
        if (page.value != null && page.value.trim { it <= ' ' } != "")
            q.setParameter(0, "%" + page.value + "%")
        val total = java.lang.Long.valueOf(q.uniqueResult().toString())
        return total
    }

    open fun findAllByHql(hql: String, vararg args: Any): MutableList<T> {
        val session = sessionFactory.currentSession
        val q = session.createQuery(hql)
        for (i in args.indices) {
            q.setParameter(i, args[i])
        }
        return q.list() as MutableList<T>
    }

    open fun listByHql(hql: String, page: Page): Map<String, Any> {
        val map = HashMap<String, Any>()
        val session = sessionFactory.currentSession
        val q = session.createQuery(hql)
        q.setFirstResult((page.page - 1) * page.rows)
        q.setMaxResults(page.rows)
        map.put("rows", q.list())
        map.put("total", q.list().size)

        return map as Map<String, Any>
    }

    open fun getUniqueAny(hql: String, vararg args: Any): Any {
        val session = sessionFactory.currentSession
        val query = session.createQuery(hql)
        if (args != null) {
            for (i in args.indices) {
                query.setParameter(i, args[i])
            }
        }
        return query.uniqueResult() as Any
    }

    open fun deleteByHql(hql: String) {
        val session = sessionFactory.currentSession
        val query = session.createQuery(hql)
        query.executeUpdate()
    }

}