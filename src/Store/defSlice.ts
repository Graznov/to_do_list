import {createSlice, PayloadAction} from '@reduxjs/toolkit'
const Temp:Array<Task> = [
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-22T00:00:00.000Z",
        id:"sdfsпппkdf 42f4",
        isCompleted:false,
        title:"1"
    },
    {
        category:"Week",
        color:"yellow",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-19T00:00:00.000Z",
        id:"sdfsdsааghjaddf 424.",
        isCompleted:false,
        title:"2"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet",
        dueDate:"2024-09-16T00:00:00.000Z",
        id:"sdfsdsрвапрkвaddf 4264.",
        isCompleted:false,
        title:"3"
    },
    {
        category:"Work",
        color:"red",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-25T00:00:00.000Z",
        id:"sdfsdsadрпkарdf 42486yh.",
        isCompleted:false,
        title:"4"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet",
        dueDate:"2024-09-15T00:00:00.000Z",
        id:"sdfkjkjhkhsdf 4g24",
        isCompleted:false,
        title:"5"
    },
    {
        category:"work",
        color:"green",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-18T00:00:00.000Z",
        id:"sdfsdf 42hljkjl4",
        isCompleted:false,
        title:"6"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor ",
        dueDate:"2024-09-17T00:00:00.000Z",
        id:"sdfshdjhkl;h f 4g24",
        isCompleted:false,
        title:"7"
    },
    {
        category:"work",
        color:"red",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-16T00:00:00.000Z",
        id:"sdfsdf ghjk,mghjk 42h4",
        isCompleted:false,
        title:"8"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-16T00:00:00.000Z",
        id:"sdfskjh jhk df 42b,4",
        isCompleted:false,
        title:"9"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-16T00:00:00.000Z",
        id:"sdfs khjk hdfm 42n4",
        isCompleted:false,
        title:"10"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-15T00:00:00.000Z",
        id:"sdfs khk df 4b2,4",
        isCompleted:false,
        title:"11"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor  ",
        dueDate:"2024-09-17T00:00:00.000Z",
        id:"sdf khjgkh   khfjk sdf 42n4",
        isCompleted:false,
        title:"12"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-22T00:00:00.000Z",
        id:"sdf khjk khjk hjkjsdf 4bm24",
        isCompleted:false,
        title:"13"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-17T00:00:00.000Z",
        id:"sdf  khjk  hjjsdf 42m,4",
        isCompleted:false,
        title:"14"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ",
        dueDate:"2024-09-16T00:00:00.000Z",
        id:"sdfsd kjhk kf 42./4",
        isCompleted:false,
        title:"15"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-16T00:00:00.000Z",
        id:"sddfsd kjh kjh saddk789df 424.",
        isCompleted:false,
        title:"16"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-19T00:00:00.000Z",
        id:"sdf khj kjh ghks df 424.",
        isCompleted:false,
        title:"17"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-15T00:00:00.000Z",
        id:"sdf kjh khjkfghjkf ghjsd9k 9saddf 424.",
        isCompleted:false,
        title:"18"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-16T00:00:00.000Z",
        id:"sdffd jkhgf ghjkksd  87 k saddf 424.",
        isCompleted:false,
        title:"19"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-19T00:00:00.000Z",
        id:"sdfsds kjghfkadfdd99f 4k24.",
        isCompleted:false,
        title:"20"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-11T00:00:00.000Z",
        id:"sdfsdd kjfhjk sfsadd876f h424.",
        isCompleted:false,
        title:"21"
    },
    {
        category:"Week",
        color:"red",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-15T00:00:00.000Z",
        id:"sdfsds kjhf addf d6785sfg4b24.",
        isCompleted:false,
        title:"22"
    },
    {
        category:"Week",
        color:"red",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-17T00:00:00.000Z",
        id:"sdfsds kjhf addf dsfg4f7567gfsd624.",
        isCompleted:false,
        title:"23"
    },
    {
        category:"Week",
        color:"red",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-19T00:00:00.000Z",
        id:"sdfsds kjhf adddgd6654sf dsfg4fgfsd274.",
        isCompleted:false,
        title:"24"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-17T00:00:00.000Z",
        id:"sdfsпп апвы ппk  df 42f4",
        isCompleted:false,
        title:"25"
    },
    {
        category:"Week",
        color:"yellow",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-25T00:00:00.000Z",
        id:"sd fsds ааg gdhja ddf 424.",
        isCompleted:false,
        title:"26"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet",
        dueDate:"2024-09-16T00:00:00.000Z",
        id:"sdfsdsрвапрkвh dcgh add gf 4264.",
        isCompleted:false,
        title:"27"
    },
    {
        category:"Work",
        color:"red",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-25T00:00:00.000Z",
        id:"sdfsdsadрп gdfkарdf 42486gg syh.",
        isCompleted:false,
        title:"28"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet",
        dueDate:"2024-09-18T00:00:00.000Z",
        id:"sdfkjkjhkh gdsdf 4g24",
        isCompleted:false,
        title:"29"
    },
    {
        category:"work",
        color:"green",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-10T00:00:00.000Z",
        id:"sdfhfd gdhsdf 42hljkjl 4",
        isCompleted:false,
        title:"30"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor ",
        dueDate:"2024-09-16T00:00:00.000Z",
        id:"sdfshfhj hdfd hdjhkl;h f 4g24",
        isCompleted:false,
        title:"31"
    },
    {
        category:"work",
        color:"red",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-19T00:00:00.000Z",
        id:"sdfsdf gh tfd jk,mghjk 42h4",
        isCompleted:false,
        title:"32"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-26T00:00:00.000Z",
        id:"sd g  h egfskjh jhk df 42b,4",
        isCompleted:false,
        title:"33"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-21T00:00:00.000Z",
        id:"sdfs kh g jk hdfm 42n4",
        isCompleted:false,
        title:"34"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-23T00:00:00.000Z",
        id:"sdfs k gh  hd hk df 4b2,4",
        isCompleted:false,
        title:"34"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor  ",
        dueDate:"2024-09-16T00:00:00.000Z",
        id:"sdf khjg sd gkh khfjk sdf 42n4",
        isCompleted:false,
        title:"36"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-18T00:00:00.000Z",
        id:"sdf khjk kh gh h jk hjkjs df 4bm24",
        isCompleted:false,
        title:"37"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-15T00:00:00.000Z",
        id:"sdf  khjk  hjjh d h d sdf 42m,4",
        isCompleted:false,
        title:"38"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ",
        dueDate:"2024-09-17T00:00:00.000Z",
        id:"sdfs gd gh d kjhk kf 42./ 4",
        isCompleted:false,
        title:"39"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-11T00:00:00.000Z",
        id:"sddg s fsd kjh kjh saddk789df 424.",
        isCompleted:false,
        title:"40"
    },
    {
        category:"work",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-15T00:00:00.000Z",
        id:"sdf khj kjh g gsd hks df 424.",
        isCompleted:false,
        title:"41"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-30T00:00:00.000Z",
        id:"sdf kjh khjkfghjkf ghg s fg 634 jsd9k 9saddf 424.",
        isCompleted:false,
        title:"42"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-22T00:00:00.000Z",
        id:"sdffd jkhgf ghjkk gd6rt sd  87 k saddf 424.",
        isCompleted:false,
        title:"43"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-19T00:00:00.000Z",
        id:"sdfsds kjg gheg ge4563tg hfkadfdd99f 4k24.",
        isCompleted:false,
        title:"44"
    },
    {
        category:"Game",
        color:"blue",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-17T00:00:00.000Z",
        id:"sdfsdd kjfhjk sfsghfd gdsgwe rgefadd876f h424.",
        isCompleted:false,
        title:"45"
    },
    {
        category:"Week",
        color:"red",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-15T00:00:00.000Z",
        id:"sdfsds kjhf addf d6785g fdsgw 53 sfg4b24.",
        isCompleted:false,
        title:"46"
    },
    {
        category:"Week",
        color:"red",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-12T00:00:00.000Z",
        id:"sdfsds kjhf addf dsfg4f75hg gdfhg 4435 67gfsd624.",
        isCompleted:false,
        title:"47"
    },
    {
        category:"Week",
        color:"red",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        dueDate:"2024-09-11T00:00:00.000Z",
        id:"sdfsds kjhf adddg g 43 5 dghjklgd6654sf dsfg4fgfsd274.",
        isCompleted:false,
        title:"48"
    }
]
export interface Task {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    category: string,
    color: string,
    isCompleted: boolean
}
export interface TaskState{
    tasks:Task[]
}
const initialState:TaskState = {
    tasks:Temp
}

const defSlice = createSlice({
    name: 'defSlice',
    initialState,
    reducers:{

        addTask (state, {payload}:PayloadAction<Task>)  {
            console.log(payload)
            state.tasks.push(payload)
        },
        checkTask (state, action){
            console.log(`CHEKED tasks "${action.payload}"`)
            state.tasks.forEach(e => {
                if (e.id === action.payload) e.isCompleted = !e.isCompleted;
            })
        },
        defChangeTask (state, action){
            console.log(`defChangeTask: ${action.payload}`)
            console.log(action.payload)
            state.tasks.forEach((e,i)=>{
                if(e.id === action.payload.id) {
                    state.tasks.splice(i,1,action.payload)
                    return
                }
            })
        },
        defDelitTask(state, action){
            state.tasks.forEach((e,i)=>{
                if(e.id === action.payload) {
                    state.tasks.splice(i,1)
                    return
                }
            })

        }
    }

})

export const {
    addTask,
    checkTask,
    defChangeTask,
    defDelitTask
} = defSlice.actions;
export default defSlice.reducer