package onion.com.tgb.model

import org.hibernate.annotations.DynamicUpdate
import javax.persistence.*


@Entity
@DynamicUpdate
data class Users (
        var name: String ?= null,
        var salary: Int = 20,
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long = 0
)