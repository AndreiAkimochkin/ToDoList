import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "./Task";

export default {
    title: 'Todolists/Task',
    component: Task,
} as Meta;


const removeCallback = action('Remove button inside Task clicked')
const changeStatusCallback = action('Status changed inside Task')
const changeTitleCallback = action('Title changed inside Task')

const Template: Story<TaskPropsType > = (args) =><div>
    <Task
        changeTaskStatus={changeStatusCallback}
        changeTaskTitle={changeTitleCallback}
        removeTask={removeCallback}
        task={  { id: "1", title: "CSS", isDone: false }}
        todolistId={'todolist1'}/>

    <Task
        changeTaskStatus={changeStatusCallback}
        changeTaskTitle={changeTitleCallback}
        removeTask={removeCallback}
        task={ { id: "2", title: "JS", isDone: true }}
        todolistId={'todolist2'}/>



</div>;

export const TaskExample = Template.bind({});
TaskExample.args = {};

