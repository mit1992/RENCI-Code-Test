FROM python:3-alpine as base

RUN mkdir -p /usr/src/app/api
WORKDIR /usr/src/app/api

RUN pip3 install --no-cache-dir flask gunicorn==19.9.0 
RUN pip3 install -U flask_cors

COPY api /usr/src/app/api

EXPOSE ${TX_SERVER_PORT}

ENTRYPOINT ["python"]

CMD ["server.py"]


