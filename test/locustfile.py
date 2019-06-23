import os
from locust import HttpLocust, TaskSet, task

class MyTaskSet(TaskSet):
    @task
    def my_task(self):
        self.client.get("/")

class MyLocust(HttpLocust):
    task_set = MyTaskSet
    min_wait = 0
    max_wait = 0
    host = os.environ['APP_URL']
