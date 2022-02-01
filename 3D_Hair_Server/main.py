# -*- coding:utf-8 -*-
# @Author: TangYingfu

from fastapi import FastAPI
from typing import Union, Optional
import uvicorn

# 实例化一个实例
app = FastAPI()


# 绑定路由
@app.get("/")
async def index():
    return {'name':"测试"}

# 声明file_path的类型为path，这样它就会被当成一个整体
@app.get("/files/{file_path:path}")
async def get_file(file_path: str):
    return {"file_path":file_path}

@app.get("user/{user_id}")
async def get_user(user_id: str, name: str="UNKNOWN", age: int=0):
    return {"user_id": user_id, "name": name, "age": age}

@app.get("/user/{user_id}")
async def get_user(user_id: Union[int, str], name: Optional[str]=None):
    '''通过Union来声明一个混合类型，int在前str在后，会先选择int，后才是str，
    name表示字符串类型，但默认值是None-不是字符串，声明为Optional[str]'''



# 在windows中加上 if __name__ == "__main__"，否否则抛出运行时异常
if __name__ == '__main__':
    # 启动服务，因为我们这个文件叫做main.py，所以要启动main的app
    # 第一个参数main:app就表示这个含义，然后是Host和port表示监听IP和端口
    uvicorn.run("main:app", host="127.0.0.1", port=5555)