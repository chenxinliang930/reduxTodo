import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../css/ReduxTodo.css'
import store from '../store/index'
import { Input , Button , List } from 'antd'

class ReduxTodo extends Component {
    constructor(props){
        super(props)
        //关键代码-----------start
        this.state=store.getState();
        //关键代码-----------end
        console.log(this.state)
        this.changeInputValue= this.changeInputValue.bind(this)
        //----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)  //转变this指向
         //关键代码------------start----------
        this.clickBtn = this.clickBtn.bind(this)
        //关键代码------------end----------
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render() { 
        return ( 
            <div >
                <div className="Top">
                TodoList
                </div>
                <div  className="addValue">
                    <Input value={this.state.inputValue} placeholder={this.state.inputValue}  onChange={this.changeInputValue}  style={{ width:'90%'}}/>
                    <Button type="primary" onClick={this.clickBtn} style={{ width:'10%'}}>增加</Button>
                </div>
                <div className="List">
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    />      
                </div>
            </div>
         );
    }
    changeInputValue(e){
        const action ={
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = { type:'addItem'}
        store.dispatch(action)
    
    }
     deleteItem(index){
        const action = {
            type:'deleteItem',
            index
        }
        store.dispatch(action)
    }
}
 
export default ReduxTodo;