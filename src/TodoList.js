import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Switch ,Button } from 'antd';
import './css/todo.css'
let newList = [];
class TodoLIst extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue:'',
            value:'',
            list:[],
            noList:['吃饭','睡觉']
         }
    }
    render() { 
        return ( <div>
                <p>
                    TodoList
                </p>
                <div className="add">
                    <Input onChange={event => this.handleMaxBackUp(event)}  allowClear placeholder={this.state.inputValue} />
                    <Button onClick={(e)=>this.addValue(e)}>添加</Button>
                </div>
                <h3>正在进行<span>{this.state.list.length}</span></h3>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li  key={index} >
                            <Switch checkedChildren="未完成" unCheckedChildren="完成" defaultChecked onClick={(e)=>this.getChange(e,index)}/><Input allowClear placeholder={item} /><Button type="danger" onClick={
                                ()=>this.delItem(index)
                            }>删除</Button>
                            </li>
                        })
                    }
                    
                </ul>
                <h3>已经完成<span>{this.state.noList.length}</span></h3>
                <ul>
                    {
                        this.state.noList.map((item,index)=>{
                            return <li  key={index} >
                            <Switch  checkedChildren="未完成" unCheckedChildren="完成" onClick={(e)=>this.getBack(e,index)}/><Input allowClear placeholder={item} />
                            <Button type="danger" onClick={
                                ()=>this.delItemtwo(index)
                            }>删除</Button>
                            </li>
                        })
                    }
                </ul>
        </div>);
    }
    handleMaxBackUp(event){
        if(event && event.target && event.target.value){
            let value = event.target.value;
            this.setState({
                    value:value,
                    list:newList
                }
            )
        }
    }
    addValue(e){
        newList.push(this.state.value);

        this.setState({
                list:newList
            }
        )
    }
    delItem(index){
        let newItem=[]
        newItem = this.state.list
        newItem.splice(index,1)
        this.setState(
          {  list:newItem}
        )
    }
    delItemtwo(index){
        console.log(index)
        let newItem=[]
        newItem = this.state.noList
        newItem.splice(index,1)
        this.setState(
          {  nolist:newItem}
        )
    }
    getChange(e,index) {
        if(!e){
            let newItem=[]
            let competedList= this.state.noList
            let competed
            newItem = this.state.list
            competed = newItem[index]
            competedList.push(competed)
            newItem.splice(index,1)
            this.setState(
                {  list:newItem,
                    noList:competedList
                }
            )
            
        }else{
            return
        }
    }
    getBack(e,index){
        if(e){
            let newItem = this.state.noList
            let nocompetedList= this.state.list
            let competed = this.state.noList[index]
            nocompetedList.push(competed)
            newItem.splice(index,1)
            this.setState(
                {  list:nocompetedList,
                    noList:newItem
                }
            )
            
        }else{
            return
        } 
    }
}
 
export default TodoLIst;