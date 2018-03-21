package onion.com.utils

import org.slf4j.LoggerFactory
import org.springframework.core.io.support.PropertiesLoaderUtils
import java.util.HashMap

class Cache {

    private val logger = LoggerFactory.getLogger(Cache::class.java)

    private var locations: List<String>? = null

    private var datacache: List<String>? = null

    private var nofileterurl: List<String>? = null

    private val cacheProps = HashMap<String, String>()

    private val dataProps = HashMap<String, String>()

    private val nofilterProps = HashMap<String, String>()

    @Throws(Exception::class)
    fun init() {
        try {
            for (url in locations!!) {
                val props = PropertiesLoaderUtils.loadAllProperties(url)
                for ((key, value) in props) {
                    cacheProps.put(key.toString(),value.toString())
                }
            }
            for (url in datacache!!) {
                val props = PropertiesLoaderUtils.loadAllProperties(url)
                for ((key, value) in props) {
                    dataProps.put(key.toString(), value.toString())
                }
            }
            for (url in nofileterurl!!) {
                val props = PropertiesLoaderUtils.loadAllProperties(url)
                for ((key, value) in props) {
                    nofilterProps.put(key.toString(), value.toString())
                }
            }
        } catch (e: Exception) {
            logger.error("error read properties in Cache init, please check property files")
            throw e
        }

        for ((key, value) in cacheProps) {
            logger.debug("get cache property[$key=$value]")
        }
        for ((key, value) in dataProps) {
            logger.debug("get cache property[$key=$value]")
        }
        for ((key, value) in nofilterProps) {
            logger.debug("get cache property[$key=$value]")
        }
    }

    fun getProperty(key: Any): String? {
        return cacheProps[key.toString()]
    }

    fun getDataProps(): Map<String, String> {
        return dataProps
    }

    /**
     * Getter method for property <tt>locations</tt>.

     * @return property value of locations.
     */
    fun getLocations(): List<String>? {
        return locations
    }


    /**
     * Setter method for property <tt>locations</tt>.

     * @param locations value to be assigned to property locations.
     */
    fun setLocations(locations: List<String>) {
        this.locations = locations
    }

    fun getDatacache(): List<String>? {
        return datacache
    }

    fun setDatacache(datacache: List<String>) {
        this.datacache = datacache
    }

    fun getNofileterurl(): List<String>? {
        return nofileterurl
    }

    fun setNofileterurl(nofileterurl: List<String>) {
        this.nofileterurl = nofileterurl
    }

    fun getNofilterProps(): Map<String, String> {
        return nofilterProps
    }

    fun getCacheProps(): Map<String, String> {
        return cacheProps
    }
}