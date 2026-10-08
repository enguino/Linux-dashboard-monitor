import subprocess
import json
import psutil
import socket
import time

kernel = subprocess.run(
    ["uname", "-r"],
    capture_output=True,
    text=True
).stdout.strip()

while True:
    data = {
        "hostname": socket.gethostname(),
        "kernel": kernel,
        "cpu_percent": psutil.cpu_percent(interval=1),
        "raw_percent": psutil.virtual_memory().percent,
        "disk_percent": psutil.disk_usage("/").percent,
        "process_count": len(psutil.pids())
    }

    with open("systemdata.json", "w") as file:
        json.dump(data, file, indent=4)

    print("systemdata.json opprettet")
    time.sleep(5)