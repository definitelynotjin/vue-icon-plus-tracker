import { ref } from 'vue'

export const taskInfo = ref(null)

function formattedTaskDate(task:any){
  return{
    ...task,
    due_date: {
      from: new Date(task.due_date.from).toLocaleDateString(),
      to: new Date(task.due_date.to).toLocaleDateString(),
    },
    created_at: new Date(task.created_at).toLocaleString(),
    updated_at: new Date(task.updated_at).toLocaleString(),
  }
}

export async function taskData(url: string){
  try{
    const response = await fetch(url)
    const data = await response.json()
    const formattedTask =  Array.isArray(data) ? data.map(formattedTaskDate) : formattedTaskDate(data)
    console.log(data)
    taskInfo.value = formattedTask
    console.log('this is the new date', formattedTaskDate)
    console.log('this is the new date with the new task ', formattedTask)
    return formattedTask
  } catch (e){
    console.error('error woi', e)
    return null
  }
}
