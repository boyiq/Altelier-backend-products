FROM ubuntu:latest

ARG DEBIAN_FRONTEND=noninteractive
RUN apt update
RUN apt install -y npm

RUN git clone https://github.com/Mummies-SDC/mummies-products-bq.git

WORKDIR mummies-products-bq
RUN npm install
CMD npm run start
