const DataAPI = {

  "types": [
    {},
    {
      "items": Array(5).fill()
    },
    {
      "items": Array(110).fill()
    },
    {
      "items": Array(210).fill()
    },
    {
      "items": Array(150).fill()
    },
    {
      "items": Array(160).fill()
    }
  ],

  "users": [
    {
      id: 0,
      name: "Shola Broadhurst",
      role: "Nurse",
      img: "https://avatars3.githubusercontent.com/u/1759?s=460&v=4",
      tasks: [
        { 
          message: 'task 1 message 0',
          steps: [
            {
              message: [
                'task 1 message 1',
                'task 1 message 2',
              ],
              type: 2
            },
            {
              message: [
                'task 1 message 3',
                'task 1 message 4',
              ],
              type: 3
            }
          ]
        },
        {
          message: 'task 2 message 0',
          steps: [
            {
              message: [
                'task 2 message 1',
                'task 2 message 2',
              ],
              type: 4
            },
            {
              message: [
                'task 2 message 3',
                'task 2 message 4',
              ],
              type: 5
            }
          ]
        },
      ]
    },
    {
      id: 1,
      name: "Kirstie Ramirez",
      role: "Purchaser",
      img: "http://www.ucdenver.edu/academics/colleges/medicalschool/education/degree_programs/PAProgram/prospectivestudent/PublishingImages/buck.jpg",
      tasks: [
        {
          message: 'task 3 message 0',
          steps: [
            {
              message: [
                'task 3 message 1',
                'task 3 message 2',
              ],
              type: 2
            },
            {
              message: [
                'task 3 message 3',
                'task 3 message 4',
              ],
              type: 4
            }
          ]
        },
        {
          message: 'task 4 message 0',
          steps: [
            {
              message: [
                'task 4 message 1',
                'task 4 message 2',
              ],
              type: 3
            },
            {
              message: [
                'task 4 message 3',
                'task 4 message 4',
              ],
              type: 4
            }
          ]
        },
      ]
    },
    {
      id: 2,
      name: "Kwame Palacios",
      role: "Administrator",
      img: "https://avatars3.githubusercontent.com/u/30113109?s=460&v=4",
      tasks: [
        {
          message: 'task 5 message 0',
          steps: [
            {
              message: [
                'task 5 message 1',
                'task 5 message 2',
              ],
              type: 2
            },
            {
              message: [
                'task 5 message 3',
                'task 5 message 4',
              ],
              type: 3
            }
          ]
        },
        {
          message: 'task 6 message 0',
          steps: [
            {
              message: [
                'task 6 message 1',
                'task 6 message 2',
              ],
              type: 4
            },
            {
              message: [
                'task 6 message 3',
                'task 6 message 4',
              ],
              type: 5
            }
          ]
        },
      ]
    }
  ]

}

export default DataAPI