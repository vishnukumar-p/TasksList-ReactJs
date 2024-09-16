import {Component} from 'react'
import {v4} from 'uuid'
import {
  AppContainer,
  FirstContainer,
  SecondContainer,
  FormElement,
  Heading,
  InputContainer,
  LabelElement,
  InputElement,
  SelectElement,
  ButtonElement,
  TagsListContainer,
  HeadingSecond,
  ListItem,
  ButtonElementTag,
  TasksContainer,
  ListItemTask,
  ParaElement,
  ButtonTask,
  FormContainer,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class TaskListApp extends Component {
  state = {
    inputText: '',
    activeTagId: tagsList[0].optionId,
    tasksList: [],
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({activeTagId: event.target.value})
  }

  onClickTag = id => {
    const {activeTagId} = this.state
    if (activeTagId === id) {
      this.setState({activeTagId: ''})
    } else {
      this.setState({activeTagId: id})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {activeTagId, inputText} = this.state
    const newList = tagsList.filter(each => each.optionId === activeTagId)
    const obj = newList[0]
    if (inputText !== '') {
      const objectOne = {
        id: v4(),
        textWord: inputText,
        tagWord: obj.displayText,
      }
      this.setState(prev => ({
        tasksList: [...prev.tasksList, objectOne],
        inputText: '',
        activeTagId: '',
      }))
    }
  }

  render() {
    const {activeTagId, tasksList, inputText} = this.state
    let finalList
    if (activeTagId === '') {
      finalList = tasksList
    } else {
      finalList = tasksList.filter(
        each => each.tagWord.toLowerCase() === activeTagId.toLowerCase(),
      )
    }
    return (
      <AppContainer>
        <FirstContainer>
          <FormContainer>
            <FormElement onSubmit={this.submitForm}>
              <Heading>Create a task!</Heading>
              <InputContainer>
                <LabelElement htmlFor="task">Task</LabelElement>
                <InputElement
                  id="task"
                  type="text"
                  value={inputText}
                  onChange={this.onChangeInput}
                  placeholder="Enter the task here"
                />
              </InputContainer>
              <InputContainer>
                <LabelElement htmlFor="tags">Tags</LabelElement>
                <SelectElement
                  id="tags"
                  value={activeTagId}
                  onChange={this.onChangeSelect}
                >
                  {tagsList.map(each => (
                    <option value={each.optionId}>{each.displayText}</option>
                  ))}
                </SelectElement>
              </InputContainer>
              <ButtonElement type="submit">Add Task</ButtonElement>
            </FormElement>
          </FormContainer>
        </FirstContainer>
        <SecondContainer>
          <HeadingSecond>Tags</HeadingSecond>
          <TagsListContainer>
            {tagsList.map(each => (
              <ListItem key={each.optionId}>
                <ButtonElementTag
                  type="button"
                  onClick={() => this.onClickTag(each.optionId)}
                  bgColor={
                    activeTagId === each.optionId ? '#f3aa4e' : 'transparent'
                  }
                >
                  {each.displayText}
                </ButtonElementTag>
              </ListItem>
            ))}
          </TagsListContainer>
          <HeadingSecond>Tasks</HeadingSecond>
          {finalList.length > 0 ? (
            <TasksContainer>
              {finalList.map(each => (
                <ListItemTask key={each.id}>
                  <ParaElement>{each.textWord}</ParaElement>
                  <ButtonTask>{each.tagWord}</ButtonTask>
                </ListItemTask>
              ))}
            </TasksContainer>
          ) : (
            <ParaElement>No Tasks Added Yet</ParaElement>
          )}
        </SecondContainer>
      </AppContainer>
    )
  }
}
export default TaskListApp
