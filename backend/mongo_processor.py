# -*- coding: utf-8 -*-

import pymongo
from bson.objectid import ObjectId
client = pymongo.MongoClient("mongodb+srv://root:root123@ubereatscluster.wsfqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client["blinkpad"]
coll = db["images"]


def get_images():
    x=coll.find()
    return x


def update_likes(img_id,optype):
    
    if optype=="like":
        x=coll.update_one({"_id":ObjectId(img_id)},{ "$inc": { "likes": 1 }})
    else:
        x=coll.update_one({"_id":ObjectId(img_id)},{ "$inc": { "dislikes": 1 }})
    return x    

def insert_image_data(image):
    coll.insert_one(image)
    return coll.inserted_id
    
   
    
"""
    
if __name__=='__main__':
    x=list(get_images())
    print(x)
    #update_likes(x[0]['_id'],"like")
    image1={"url":"https://ubereatscustomerimagesbucket.s3.us-east-2.amazonaws.com/PXL_20211024_004630938.jpg","likes":0,"dislikes":0,"name":"mountains"}
    image2={"url":"https://ubereatscustomerimagesbucket.s3.us-east-2.amazonaws.com/PXL_20211023_154814022.jpg","likes":0,"dislikes":0,"name":"valley"}
    image3={"url":"https://ubereatscustomerimagesbucket.s3.us-east-2.amazonaws.com/PXL_20211023_163754644.jpg","likes":0,"dislikes":0,"name":"park"}
    image4={"url":"https://ubereatscustomerimagesbucket.s3.us-east-2.amazonaws.com/PXL_20211023_172208683.jpg","likes":0,"dislikes":0,"name":"lake"}
    #x=insert_image_data(image1)
    x=insert_image_data(image2)
    x=insert_image_data(image3)
    x=insert_image_data(image4)
    print(x)
    """    