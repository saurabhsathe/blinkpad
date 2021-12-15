FROM python:3.8
RUN mkdir backend
COPY . ./backend
WORKDIR /backend
RUN pip install -r requirements.txt
CMD ["python","server.py"]