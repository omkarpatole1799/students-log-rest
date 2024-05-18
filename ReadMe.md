# END Points

## Student

1. IP/student/list [post]

```
eg.
- sendData: {
  'teacherId': 1
}
```

2. IP/student/add [post]

```
eg.
- sendData :
  {
  "sMobile": 9764492452,
  "sName": "Omkar Patole",
  "sEmail": "omkarpatole1799@gmail.com",
  "sAddress": "nashik",
  "tId" : 1
  }
```

## Admin
1. IP/admin/add
```
eg.
- sendData: {
    "name": "Deepakkumar Shinde",
    "mobile": "0000000000",
    "email": "deepakkumar.shinde1@gmail.com",
    "address": "nashik",
    "password": "a"
  }
```

## Error codes
1. E_1000 : Invalid Data
2. E_1001 : Server Error
3. E_1002 : Create Resource Failed
4. E_1003 : Data Already Exsists