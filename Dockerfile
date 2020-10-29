FROM node:latest

# 设置变量
ENV workspace /usr/local/workspace/app/
COPY app/* ${workspace}
WORKDIR ${workspace}

RUN npm config set -g registry https://registry.npm.taobao.org

RUN npm i
RUN npm i nodemon -g

CMD npm run start