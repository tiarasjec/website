// pages/GanttChart.tsx

import React, { useState } from 'react';
import { Gantt, Task, ViewMode } from "gantt-task-react";
import { initTasks, getStartEndDateForProject } from "../../lib/helpers";
import { Drawer } from 'antd';
import SingleTaskView from "./components/SingleTaskView";
import { DownOutlined } from '@ant-design/icons';
import { Button } from '../ui/button';

const GanttChart: React.FC = () => {

    // Gantt chart settings
    const [tasks, setTasks] = useState<Task[]>(initTasks());
    const [selectedTask, setSelectedTask] = useState<any>(null);
    const [view, setView] = useState<ViewMode>(ViewMode.Day);

    let columnWidth = 60;
    if (view === ViewMode.Month) {
        columnWidth = 300;
    } else if (view === ViewMode.Week) {
        columnWidth = 250;
    }

    // Handle task change
    const handleTaskChange = (task: Task) => {
        let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
        if (task.project) {
            const [start, end] = getStartEndDateForProject(newTasks, task.project);
            const project = newTasks[newTasks.findIndex((t) => t.id === task.project)];
            if (
                project.start.getTime() !== start.getTime() ||
                project.end.getTime() !== end.getTime()
            ) {
                const changedProject = { ...project, start, end };
                newTasks = newTasks.map((t) =>
                    t.id === task.project ? changedProject : t
                );
            }
        }
        setTasks(newTasks);
    };

    // Handle progress change
    const handleProgressChange = async (task: Task) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    };

    // Handle task selection
    const handleSelect = (task: Task, isSelected: boolean) => {
        setSelectedTask(isSelected ? task : null);
    };

    // Handle expander click
    const handleExpanderClick = (task: Task) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    };

    // Drawer settings
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const containerStyle: React.CSSProperties = {
        position: 'relative',
        overflow: 'hidden',
    };

    return (
        <div>
            <div className="relative overflow-hidden">

                <div>
                    <Button
                        onClick={() => setView(ViewMode.Day)}
                    >
                        Day
                    </Button>
                    <Button
                        onClick={() => setView(ViewMode.Week)}
                    >
                        Week
                    </Button>
                    <Button
                        onClick={() => setView(ViewMode.Month)}
                    >
                        Month
                    </Button>
                </div>

                <Gantt
                    tasks={tasks}
                    viewMode={view}
                    onDateChange={handleTaskChange}
                    onProgressChange={handleProgressChange}
                    onSelect={handleSelect}
                    onClick={showDrawer}
                    onExpanderClick={handleExpanderClick}
                    columnWidth={columnWidth}
                />

                <Drawer
                    title="Outline Design"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={open}
                    getContainer={false}
                >
                    <SingleTaskView selectedTask={selectedTask} />
                </Drawer>

            </div>
        </div>
    );
}

export default GanttChart;
