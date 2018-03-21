package onion.com.tgb.controller

import onion.com.tgb.model.Users
import onion.com.tgb.service.GenericService
import onion.com.tgb.service.UsersService
import onion.com.utils.reSuccess
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/users")
class UsersController(val usersService: UsersService, val reSuccess: reSuccess):GenericController<Users, Long>() {

    override fun getService() = usersService

    @GetMapping("/findAll")
    fun getUsers(): List<Users> = usersService.getUsers()

    @GetMapping("/getOne/{id}")
    fun getOne(@PathVariable id: Int): Any{
        return reSuccess.toSuccess("",usersService.getOne(id))
    }

    @GetMapping("/updateUser/{id}")
    fun updateUser(@PathVariable id: Long)= reSuccess.toSuccess("",usersService.updateUser(id))

    @GetMapping("/insert/{name}")
    fun addUser(@PathVariable name: String): List<Users> = usersService.addUser(name)

    @GetMapping("/getAll")
    fun getAll(): Any = usersService.getAll()

    @GetMapping("/business")
    fun business(): Any = reSuccess.toSuccess("", usersService.business())
}