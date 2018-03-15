db.user.aggregate([
  {
    $match: {
      age: {
        $exists: 1
      },
      name: {
        $exists: 1
      }
    }
  },
  {
    $group: {
      _id: "$name",
      avg: {
        $avg: "$age"
      }
    }
  }
])