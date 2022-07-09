"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, People, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



@api.route('/people', methods=['GET'])
def get_people():
    people = People.query.all()
    if people is None:
        return jsonify(msg="This page does not exist."), 400
    else:
        return jsonify(
        data=[person.serialize() for person in people]), 200

@api.route('/people/<int:id>', methods=['GET'])
def get_person(id):
    person = People.query.filter(
        People.id == id
    ).one_or_none()
    if person is None:
        return jsonify(msg="This person does not exist."), 400
    else:
        return jsonify(
        data=person.serialize()
        ), 200



# @api.route('/planets', methods=['GET'])
# def get_planets():
#     planets = Planets.query.all()
#     if planets is None:
#         return jsonify(msg="This page does not exist."), 400
#     else:
#         return jsonify(
#         data=[planet.serialize() for planet in planets]), 200

# @api.route('/planets/<int:id>', methods=['GET'])
# def get_planet(id):
#     planet = Planets.query.filter(
#         Planets.id == id
#     ).one_or_none()
#     if planet is None:
#         return jsonify(msg="This planet does not exist."), 400
#     else:
#         return jsonify(
#         data=person.serialize()
#         ), 200



# @api.route('/vehicles', methods=['GET'])
# def get_vehicles():
#     vehicles = Vehicles.query.all()
#     if vehicles is None:
#         return jsonify(msg="This page does not exist."), 400
#     else:
#         return jsonify(
#         data=[vehicle.serialize() for vehicle in Vehicles]), 200

# @api.route('/vehicles/<int:id>', methods=['GET'])
# def get_vehicle(id):
#     vehicle = Vehicles.query.filter(
#         Vehicles.id == id
#     ).one_or_none()
#     if vehicle is None:
#         return jsonify(msg="This vehicle does not exist."), 400
#     else:
#         return jsonify(
#         data=vehicle.serialize()
#         ), 200