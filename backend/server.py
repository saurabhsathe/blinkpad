# -*- coding: utf-8 -*-
"""
Created on Tue Dec 14 02:13:34 2021

@author: Checkout
"""

from flask import Flask, jsonify, request
from mongo_processor import get_images,update_likes
from flask_cors import CORS, cross_origin

# In[3]:
app= Flask(__name__)
cors = CORS(app)



# In[4]:
@app.route("/getimages", methods=["GET"])
def getImages():
    try:
        images = get_images()
        images=list(images)
        for i in images:
            i["_id"]=str(i["_id"])
            
        return jsonify(list(images))
    except Exception as e:
        print("faced an error",e)

@app.route("/updateLike", methods=["POST"])
def updateLikes():
    
    data=request.get_json()
    print("here is your data",data)
    try:
      x=update_likes(data["img_id"],data["op_type"])
      print(x)
      return "updated successfully"
    except Exception as e:
      print("faced an error",e)
      return "faced an error"
      
# In[6]:


#  main thread of execution to start the server
if __name__=='__main__':
    app.run(host="127.0.0.1",port=5555)


# In[ ]:




