import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  min-height: 1000px;
  width: 100%;
`
export const FirstContainer = styled.div`
  display: flex;
  background-color: #131213;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const SecondContainer = styled.div`
  display: flex;
  background-color: #000000;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
  padding: 10px;
`

export const FormContainer = styled.div`
  width: 80%;
`
export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
  border: none;
  background-color: transparent;
  margin-bottom: 5px;
  width: 60%;
`
export const LabelElement = styled.label`
  color: white;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: start;
  margin-bottom: 10px;
`
export const InputElement = styled.input`
  border: none;
  background-color: white;
  border-radius: 2px;
  color: #64748b;
  font-size: 15px;
  font-family: 'Roboto';
  width: 100%;
  height: 50px;
`
export const SelectElement = styled.select`
  border: none;
  background-color: white;
  border-radius: 2px;
  color: #64748b;
  font-size: 15px;
  font-family: 'Roboto';
  min-width: 326px;
  height: 50px;
`
export const ButtonElement = styled.button`
  background-color: #f3aa4e;
  padding: 5px;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 15px;
  font-family: 'Roboto';
  margin: 10px;
`
export const HeadingSecond = styled.h1`
  color: white;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
  align-self: flex-start;
`
export const TagsListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: flex-start;
  padding: 0px;
`
export const ListItem = styled.li`
  display: flex;
  padding: 0px;
`
export const ButtonElementTag = styled.button`
  background-color: ${props => props.bgColor};
  padding: 5px;
  border: 1px solid #f3aa4e;
  border-radius: 15px;
  color: white;
  font-size: 15px;
  margin-right: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Roboto';
`
export const TasksContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
`
export const ListItemTask = styled.li`
  background-color: transparent;
  width: 100%;
  border: none;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #131213;
  margin-left: 0px;
  margin-bottom: 10px;
  align-self: flex-start;
`
export const ParaElement = styled.p`
  color: white;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const ButtonTask = styled.p`
  background-color: #f3aa4e;
  padding: 0px;
  border: none;
  border-radius: 30px;
  color: #323f4b;
  font-size: 10px;
  font-family: 'Roboto';
  width: 100px;
  margin: 10px;
`
