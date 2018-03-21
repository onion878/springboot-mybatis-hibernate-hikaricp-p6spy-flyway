package onion.com.tgb.dao

import onion.com.tgb.model.Users
import org.apache.ibatis.annotations.Param

interface UsersDao{
    fun getOne(@Param("id") id: Int): Users

    fun save(users: Users)

    fun getAll(): List<Users>
}