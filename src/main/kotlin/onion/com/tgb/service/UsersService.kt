package onion.com.tgb.service

import onion.com.tgb.dao.UsersDao
import onion.com.tgb.model.Users
import onion.com.utils.BusinessException
import onion.com.utils.reSuccess
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional(readOnly = true)
class UsersService (val usersDao: UsersDao, val reSuccess: reSuccess): GenericService<Users, Long>() {

    fun getUsers(): List<Users> = this.findAll()

    fun getOne(id: Int) = usersDao.getOne(id)

    @Transactional
    fun addUser(name: String): List<Users> {
        val user = Users("Hibernate:$name")
        this.save(user)
        val user1 = Users("ad:$name",2,3)
        usersDao.save(user1)
        return this.findAll()
    }

    @Transactional
    fun updateUser(id: Long): List<Users> {
        var user = Users()
        user.id = id;
        user.name="更新的一个字段"
        this.updateField("name" ,user)
        return this.findAll()
    }

    fun getAll(): Any {
        return reSuccess.toList(usersDao.getAll(), 1)
    }

    fun  business(): Any {
        var params = HashMap<String, Any>()
        params.put("pageSize", 5)
        params.put("pageNum", 1)
        throw BusinessException("超负荷")
        return params
    }
}