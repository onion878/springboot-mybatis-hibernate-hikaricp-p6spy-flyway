package onion.com.utils


class BusinessException : RuntimeException {

    private var code: Any? = null

    /**
     * Creates a new instance of BaseException.

     */
    constructor() : super()

    constructor(cause: Throwable, code: Any, vararg params: Any) : super(String.format(Cache().getProperty(code)!!, *params), cause) {
        this.code = code
    }

    constructor(code: Any, vararg params: Any) : super(String.format(Cache().getProperty(code)!!, *params)) {
        this.code = code
    }


    /**
     * Creates a new instance of BaseException.

     * @param message
     * *
     * @param cause
     */
    constructor(message: String, cause: Throwable) : super(message, cause)

    /**
     * Creates a new instance of BaseException.

     * @param message
     */
    constructor(message: String) : super(message)

    /**
     * Creates a new instance of BaseException.

     * @param cause
     */
    constructor(cause: Throwable) : super(cause)


    /**
     * Getter method for property <tt>code</tt>.

     * @return property value of code.
     */
    fun getCode(): Any? {
        return code
    }


    /**
     * Setter method for property <tt>code</tt>.

     * @param code value to be assigned to property code.
     */
    fun setCode(code: Any) {
        this.code = code
    }
}