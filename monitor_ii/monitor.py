from datetime import datetime
from time import sleep

# import the Model classes for CPU and Storage
from db import CPU, Storage, Base

# import the methods that will be used from the mypi file
from mypi import \
    get_serial, get_mac, get_host_name, \
    get_cpu_temp, get_gpu_temp, get_maximum_cpu_load


def headings():
    print()
    print(f'{"Name":<10}|{"Serial #":<18}|'
          f'{"MAC":<20}|{"Created at":<28}|'
          f'{"CPU Temp":>8}|{"GPU Temp":>8}|'
          f'{"CPU Load":>8}'
          f'')


def main(_delay):

    while True:
        # Create a CPU object and set the properties
        host_name = get_host_name()
        serial = get_serial()
        host_mac = get_mac()
        load = get_maximum_cpu_load()
        cpu_temp = get_cpu_temp()
        gpu_temp = get_gpu_temp()
        created_at = datetime.now()
        # save the object to the database using SQLAlchemy ORM and
        # commit the

        print(f'{host_name:<10}|{serial:<18}|'
              f'{host_mac:^20}|{created_at}  |'
              f'{cpu_temp:>8.1f}|{gpu_temp:>8.1f}|'
              f'{load:>8.1f}'
              f'')

        sleep(_delay)


if __name__ == '__main__':
    delay = 5.0
    main(delay)