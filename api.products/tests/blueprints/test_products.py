from pytest import fixture
from app import PRODUCTS_URL
from api.blueprints.product import product_blueprint
from api.models import Product
import json

@fixture()
def test_client(test_app):
    test_app.register_blueprint(product_blueprint, url_prefix=PRODUCTS_URL)
    return test_app.test_client()

@fixture()
def init_db():
    products = [
        Product(**{
            "ProductName": "Safety Blanket",
            "ProductPhotoURL": "/blanket",
            "ProductStatus": "Active",
        }),
        Product(**{
            "ProductName": "Underpants",
            "ProductPhotoURL": "/underpants",
            "ProductStatus": "InActive",
        }),
        Product(**{
            "ProductName": "Gloves",
            "ProductPhotoURL": "",
            "ProductStatus": "Active",
        }),
    ]
    for product in products: product.save()
    return products

def test_get_products(test_client, init_db):
    response = test_client.get(f"{PRODUCTS_URL}/")
    assert response.status_code == 200
    deserialized_response = json.loads(response.data)
    data = deserialized_response.get('data')
    assert data is not None
    assert len(data) == 2

def test_get_inactive_products(test_client, init_db):
    response = test_client.get(f"{PRODUCTS_URL}/inactive")
    assert response.status_code == 200
    deserialized_response = json.loads(response.data)
    data = deserialized_response.get('data')
    assert data is not None
    assert len(data) == 1