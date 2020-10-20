import React from 'react';
import { Comment, Form, Button, Header, Icon} from 'semantic-ui-react'


import p from "./p.png";

function singleComment(detail) {
  return()
}

class Comments extends React.Component{

  constructor(){
    super()
    this.state = {
      inputContent : ""
    }
  }
  render(){
    console.log(this.state.inputContent)
    return(<Comment.Group style = {{marginLeft:"650px"}}>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar src={p} />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>



    <Form reply>
      <Form.TextArea
      value = {this.state.inputContent}
      placeholder="댓글을 입력해주세요"
      onChange = {(e) => this.setState({ inputContent: e.target.value})}/>
      <Button content='Add Reply' labelPosition='left' icon='edit'
      primary
      onClick={() => alert(this.state.inputContent)} />
    </Form>
    <br/>
    <Button circular color='facebook' icon='facebook' />
   <Button circular color='twitter' icon='twitter' />
   <Button circular color='youtube' icon='youtube' />
   <Button circular color='instagram' icon='instagram' />

  </Comment.Group>)
  }
}
export default Comments
