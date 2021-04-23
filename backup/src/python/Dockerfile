FROM public.ecr.aws/bitnami/python:3.7-prod
ENV PORT=8080
EXPOSE 8080
RUN mkdir /code
RUN mkdir /config
COPY ./ /code/
WORKDIR /code
COPY ./requirements.txt /config/
RUN pip install -r /config/requirements.txt
