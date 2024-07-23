from flask import Blueprint
from api.models import Product
from api.schemas import ProductSchema

product_blueprint = Blueprint('product_blueprint', __name__)

@product_blueprint.route('/', methods=['GET'])
def get_products():
    product_schema = ProductSchema(many=True)
    try:
        products = Product.select().where(Product.ProductStatus =='Active')
        products_serialized = product_schema.dump(products)
    except Exception as err:
        return { 'data': [], 'message': str(err) }, 500
    print("returning", products_serialized)
    return { 'data': products_serialized, 'message': '' }, 200

@product_blueprint.route('/inactive', methods=['GET'])
def get_inactive_products():
    product_schema = ProductSchema(many=True)
    try:
        products = Product.select().where(Product.ProductStatus == 'InActive')
        products_serialized = product_schema.dump(products)
    except Exception as err:
        return { 'data': [], 'message': str(err) }, 500
    return { 'data': products_serialized, 'message': '' }, 200