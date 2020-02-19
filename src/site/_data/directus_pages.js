const axios = require('axios')

module.exports = async () => {
    const config = {
        headers: { Authorization: `Bearer blxztTQOf2qFJ9GizD0JZHe9` }
    };

    let response = await axios.get('http://directus.test/directus-main/items/pages?fields=*.*', config)

    return response.data.data
}