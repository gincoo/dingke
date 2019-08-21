const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

const getDateLists = dateLists=>{
  dateLists = {
    "code": 200,
    "data": [
      {
        "date": "2018年11月10日",
        "userNum": 4,
        "userLists": [
          {
            "username": "阿一",
            "userId": 10001
          },
          {
            "username": "阿二",
            "userId": 10002
          },
          {
            "username": "阿三",
            "userId": 10003
          },
          {
            "username": "阿四",
            "userId": 10004
          },
          {
            "username": "阿五",
            "userId": 10005
          }
        ]
      },
      {
        "date": "2018年11月9日",
        "userNum": 4,
        "userLists": [
          {
            "username": "阿一",
            "userId": 10001
          },
          {
            "username": "阿二",
            "userId": 10002
          },
          {
            "username": "阿三",
            "userId": 10003
          },
          {
            "username": "阿四",
            "userId": 10004
          }
        ]
      },
      {
        "date": "2018年11月8日",
        "userNum": 4,
        "userLists": [
          {
            "username": "阿一",
            "userId": 10001
          },
          {
            "username": "阿二",
            "userId": 10002
          },
          {
            "username": "阿三",
            "userId": 10003
          },
          {
            "username": "阿四",
            "userId": 10004
          },
          {
            "username": "阿五",
            "userId": 10005
          }
        ]
      },
      {
        "date": "2018年11月7日",
        "userNum": 4,
        "userLists": [
          {
            "username": "阿一",
            "userId": 10001
          },
          {
            "username": "阿二",
            "userId": 10002
          },
          {
            "username": "阿三",
            "userId": 10003
          },
          {
            "username": "阿四",
            "userId": 10004
          }
        ]
      }
    ]
  }
  return ;
}