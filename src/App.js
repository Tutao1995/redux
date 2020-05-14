import React, { Component, useState, useEffect } from 'react';
import { Input, Button, List } from 'antd';
import { changeInputCreator, addListCreator, deleteListCreator} from './store/actionCreator'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import store from './store'
import 'antd/dist/antd.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    store.subscribe(this.storeChange)//状态订阅
  }
  changeInputValue(e){
    const action = changeInputCreator(e.target.value)
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }
  addList(){
    let inputValue = this.state.inputValue;
    const action = addListCreator(inputValue)
    store.dispatch(action)
  }
  deleteList(index){
    const action = deleteListCreator(index)
    store.dispatch(action)
  }
  render() { 
    return (  
      <div style={{margin:"50px"}}>
        <div>
          <Input placeholder="请输入"  
            style={{width:'310px'}} 
            value={this.state.inputValue} 
            onChange={this.changeInputValue}
            onPressEnter={this.addList}
          />
          <Button type="primary" onClick={this.addList}>增加</Button>
        </div>
        <div style={{width:"310px"}}>
          <List 
            bordered
            dataSource={this.state.list}
            renderItem = {(item,index) => (<List.Item  actions={[<Button className="list-button" onClick={() => this.deleteList(index)} shape="circle" icon="close" type="danger"></Button>]}>{item}</List.Item>)}
          />
        </div>
        <Router>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/list/">列表</Link></li>
          </ul>
          <Route path="/" exact component={Index}></Route>
          <Route path="/list/"  component={Lists}></Route>

        </Router>
      </div>
    );
  }
}
 
function Index(){
  return <h2>index</h2>
}
function Lists(){
  return <h2>list</h2>
}

export default App;
