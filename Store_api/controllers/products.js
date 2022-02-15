const Product = require('../models/product')


const getAllProductsStatic = async (req, res) => {
    const {featured, company, name, sort, fields,numericFilter} = req.query;
    const queryObject = {}
    if(featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if(company) {
        queryObject.company = company;
    }
    if(name) {
        queryObject.name = {$regex: name, $options: 'i'};
    }

    let result = Product.find(queryObject)

    if(sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createdDate')
    }

    if(fields) {
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit;

    if(numericFilter) {
        const operatorMap = {
            '>' : '$gt',
            '>=' : '$gte',
            '=' : '$eq',
            '<' : '$lt',
            '<=' : '$lte'
        }

        const regex = /\b(<|>|>=|<=|=)\b/g
        let filters = numericFilter.replace(regex, (match) => `-${operatorMap[match]}-`)
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const[field,operator,value] = item.split('-');
            if(options.includes(field)) {
                queryObject[field] = {[operator]: Number(value)}
            }
        })
        console.log(filters);
    }

    result = result.skip(skip).limit(limit)

    console.log(queryObject);
    const products = await result;
    res.status(200).json({products, nbHits: products.length})
}


const getAllProducts = async (req, res) => {

    res.status(200).json({msg:'All the products real'})
}


module.exports = {
    getAllProducts,
    getAllProductsStatic
}