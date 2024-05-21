# END Points

## Student

# IP = 64.227.149.129:3000

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

1. IP/admin/add [POST]

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

2. IP/add-session [POST]

```
eg.
- sendData: {
    "time_start": "10:00",
    "time_end" : "12:00",
    "topic_discussed": "-html, -css, -js",
    "home_work" : "-bubble-sort, -map/forEach method",
    "video_url": "https://youtube.com",
    "student_id": 2,
    "session_date": "2024-05-21"
  }
```

3. IP/get-session [POST]

```
eg.
- sendData: {
  "student_id": 2
}
```

4. IP/get-session [DELETE]

```
eg.
- sendData: {
  "student_id": 2
}
```

-NOTE: This will also delete the sessions data of the student

## Error codes

1. E_1000 : Invalid Data
2. E_1001 : Server Error
3. E_1002 : Create Resource Failed
4. E_1003 : Data Already Exsists
5. E_1004 : UNAUTHORIZED
