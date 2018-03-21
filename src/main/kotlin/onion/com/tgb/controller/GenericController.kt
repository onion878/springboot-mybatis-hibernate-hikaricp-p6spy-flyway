package onion.com.tgb.controller

import onion.com.tgb.model.Page
import onion.com.tgb.service.GenericService
import onion.com.utils.reSuccess
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.io.Serializable

abstract class GenericController<T, PK: Serializable> {
    abstract fun getService(): GenericService<T, PK>

    @Autowired
    private var reSuccess: reSuccess ?= null

    @ResponseBody
    @PostMapping("/listByPage")
    open fun listByPage(@RequestBody page: Page) = getService().listByPage(page)

    @ResponseBody
    @PostMapping("/listByEntity")
    open fun listByEntity(@RequestBody entity: T) = getService().listByEntity(entity)

    @ResponseBody
    @PostMapping("/listByEntityPage")
    open fun listByEntityPage(@RequestBody entity: T, @RequestBody page: Page) = getService().listByEntity(entity, page.page, page.rows)

    @ResponseBody
    @PostMapping("/getOneByEntity")
    open fun getOneByEntity(@RequestBody entity: T) = getService().getOneByEntity(entity)

    @ResponseBody
    @PostMapping("/SaveOrUpdate")
    @Throws(Exception::class)
    open fun SaveOrUpdate(@RequestBody t: T) = reSuccess?.toSuccess("操作成功!", getService().saveOrUpdate(t))

    @ResponseBody
    @PostMapping("/SaveOrUpdateList")
    @Throws(Exception::class)
    open fun SaveOrUpdateList(@RequestBody ts: MutableList<T>): Any? {
        getService().saveOrUpdateList(ts)
        return reSuccess?.toSuccess("操作成功!", ts.size)
    }

    @ResponseBody
    @PostMapping("/save")
    @Throws(Exception::class)
    open fun save(@RequestBody t: T) = reSuccess?.toSuccess("保存成功!", getService().save(t))

    @ResponseBody
    @PostMapping("/update")
    @Throws(Exception::class)
    open fun update(@RequestBody t: T) = reSuccess?.toSuccess("修改成功!", getService().update(t))

    @ResponseBody
    @PostMapping("/updateField")
    @Throws(Exception::class)
    open fun updateField(@RequestBody t: T) = reSuccess?.toSuccess("修改成功!", getService().updateField(t))

    @ResponseBody
    @PostMapping("/delete")
    @Throws(Exception::class)
    open fun delete(@RequestBody t: T) = reSuccess?.toSuccess("删除成功!", getService().delete(t))

    @ResponseBody
    @PostMapping("/deleteAll")
    @Throws(Exception::class)
    open fun deleteAll(@RequestBody ts: MutableList<T>): Any? {
        getService().deleteAll(ts)
        return reSuccess?.toSuccess("删除成功!", ts.size)
    }

    @ResponseBody
    @RequestMapping("/findById/{id}")
    @Throws(Exception::class)
    open fun findById(@PathVariable id: PK) = getService().findById(id)

    @ResponseBody
    @PostMapping("/findAll")
    @Throws(Exception::class)
    open fun findAll() = reSuccess?.toSuccess("", getService().findAll())

}