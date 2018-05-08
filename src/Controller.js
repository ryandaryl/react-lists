import React from 'react'
import DataApi from '/src/data/api'
import Routes from './data/routes'

export default class Controller extends React.Component {

  generateTask(userId) {
    var taskId = Math.floor(Math.random() * (DataApi.users[userId].tasks.length)) + 0
    var task_length = DataApi.users[userId].tasks[taskId].steps.length
    var task = []
    for (var i = 0; i < task_length + 3; i++) {
      var type = i < DataApi.users[userId].tasks[taskId].steps.length + 2 ?
        DataApi.users[userId].tasks[taskId].steps[i - 2] ?
          DataApi.users[userId].tasks[taskId].steps[i - 2].type : 1
        : 1
      var min = 1
      var max = DataApi.types[type].items.length - 1
      if (i > 1 && i < task_length + 2) {
        task.push(
          {
            type: type,
            item: 0,
            message: DataApi.users[userId].tasks[taskId].steps[i - 2].message[0]
          }
        )
      }
      task.push(
        {
          type: type,
          item: Math.floor(Math.random() * (max - min + 1)) + min,
          message: (DataApi.users[userId].tasks[taskId].steps[i - 2] ?
            DataApi.users[userId].tasks[taskId].steps[i - 2].message[1] : 'Begin')
        }
      )
    }
    var temp = this.state
    temp['task'] = task
    temp['message'] = 'Begin'
    this.setState(temp)
    console.log(task)
  }

  nextLabel() {
    var i = this.state.i
    if (i > 1) {
      if (this.state.task[i - 2]['type'] != this.state.task[i - 1]['item']) {
        console.log(this.state.task[i - 1])
        this.props.history.push(Routes[this.state.task[i - 1].type][0])
      }
    }
    if (!this.state.task[i]) {
      i = 2
      this.generateTask(this.state.userId)
      alert('task done.')
    }
    var temp = this.state
    temp['selected'] = this.state.task[i]['item']
    temp['message'] = this.state.task[i]['message']
    temp['isLastStep'] = i === this.state.task.length - 2
    temp['i'] = i + 1
    this.setState(temp)
  }

  chooseUser(userId) {
    var temp = this.state
    temp['userId'] = userId
    this.setState(temp)
    this.generateTask(userId)
  }

}