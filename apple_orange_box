'''
Q) You have three boxes that are mis-labeled as 'orange', 'apple', and 'orange and apple'
You can pick one fruit at a time, but cannot see inside of the box. 
How many fruits do you need to pick up in order to label them correctly? 

Answer)
https://www.youtube.com/watch?v=4fbEhrxI-ig
'''

import random 

def box_identifier(orange_apple):    
    box = {}

    # Pick one from orange_apple box
    if random.choice(orange_apple) == 'orange':
        box['orange_apple'] = 'orange'
        box['apple'] = 'orange'
        box['orange'] = 'apple'
    else:
        box['orange_apple'] = 'apple'
        box['orange'] = 'apple'
        box['apple'] = 'orange'
    
    return box

orange_apple = ['orange', 'apple']
print(box_identifier(orange_apple))
