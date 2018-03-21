package onion.com.tgb.service

import onion.com.tgb.dao.GenericDao
import onion.com.tgb.model.Page
import org.springframework.transaction.annotation.Transactional
import java.io.Serializable

open class GenericService<T, PK: Serializable>: GenericDao<T, PK>() {

    @Transactional
    override fun save(entity: T) = super.save(entity)

    @Transactional
    override fun findById(id: PK) = super.findById(id)

    @Transactional
    override fun update(entity: T) = super.update(entity)

    @Transactional
    override fun update(hql: String) = super.update(hql)

    @Transactional
    override fun delete(hql: String) = super.delete(hql)

    @Transactional
    override fun insert(hql: String)  = super.insert(hql)

    @Transactional(readOnly = true)
    override fun selectAll(hql: String) = super.selectAll(hql)

    @Transactional
    override fun updateField(field: String, entity: T) = super.updateField(field, entity)

    @Transactional
    override fun saveOrUpdate(entity: T) = super.saveOrUpdate(entity)

    @Transactional
    override fun saveOrUpdateList(entities: MutableList<T>) = super.saveOrUpdateList(entities)

    @Transactional
    override fun delete(entity: T) = super.delete(entity)

    @Transactional
    override fun deleteAll(entities: MutableList<T>) = super.deleteAll(entities)

    @Transactional(readOnly = true)
    override fun findAll() = super.findAll()

    @Transactional(readOnly = true)
    override fun listByPage(page: Page) = super.listByPage(page)

    @Transactional(readOnly = true)
    override fun getAll(page: Page) = super.getAll(page)

    @Transactional(readOnly = true)
    override fun listByEntity(entity: T, page: Int, rows: Int) = super.listByEntity(entity, page, rows)

    @Transactional(readOnly = true)
    override fun listByEntity(entity: T)= super.listByEntity(entity)

    @Transactional(readOnly = true)
    open fun getOneByEntity(entity: T)= super.listByEntity(entity).get(0)


    @Transactional(readOnly = true)
    override fun getTotal(page: Page)= super.getTotal(page)

    @Transactional(readOnly = true)
    override fun findAllByHql(hql: String, vararg args: Any) = super.findAllByHql(hql, *args)

    @Transactional(readOnly = true)
    override fun listByHql(hql: String, page: Page) = super.listByHql(hql, page)

    @Transactional(readOnly = true)
    override fun getUniqueAny(hql: String, vararg args: Any) = super.getUniqueAny(hql, *args)

    @Transactional
    override fun deleteByHql(hql: String) = super.deleteByHql(hql)

    @Transactional
    override fun updateField(entity: T) = super.updateField(entity)
}