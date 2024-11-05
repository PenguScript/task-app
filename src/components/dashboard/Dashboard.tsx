import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

// Define Task type
interface Task {
  taskName: string;
  description: string;
  dueDate: string;
  steps: string[];
}

// TaskDialog component
interface TaskDialogProps {
  open: boolean;
  handleClose: () => void;
  addTask: (task: Task) => void;
}

const TaskDialog: React.FC<TaskDialogProps> = ({ open, handleClose, addTask }) => {
  const [taskName, setTaskName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [steps, setSteps] = useState<string[]>(['']);

  const handleTaskChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => setter(e.target.value);
  
  const addStep = () => setSteps([...steps, '']);
  
  const removeStep = (index: number) => setSteps(steps.filter((_, i) => i !== index));
  
  const handleStepChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = e.target.value;
    setSteps(updatedSteps);
  };

  const handleSaveTask = () => {
    const newTask: Task = {
      taskName,
      description,
      dueDate,
      steps: steps.filter((step) => step.trim() !== ''),
    };
    addTask(newTask);
    setTaskName('');
    setDescription('');
    setDueDate('');
    setSteps(['']);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add a New Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Task Name"
          fullWidth
          variant="outlined"
          margin="normal"
          value={taskName}
          onChange={handleTaskChange(setTaskName)}
        />
        <TextField
          label="Description"
          fullWidth
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={handleTaskChange(setDescription)}
        />
        <TextField
          label="Due Date"
          type="date"
          fullWidth
          variant="outlined"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={dueDate}
          onChange={handleTaskChange(setDueDate)}
        />

        <div style={{ marginTop: '1em' }}>
          <h3>Steps to Achieve Task</h3>
          {steps.map((step, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                label={`Step ${index + 1}`}
                fullWidth
                variant="outlined"
                margin="normal"
                value={step}
                onChange={handleStepChange(index)}
              />
              <Button 
                color="secondary" 
                onClick={() => removeStep(index)} 
                style={{ marginLeft: '8px' }}
              >
                Remove Step
              </Button>
            </div>
          ))}
          <Button
            variant="outlined"
            color="primary"
            onClick={addStep}
            style={{ marginTop: '0.5em' }}
          >
            Add Step
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSaveTask} color="primary" variant="contained">
          Save Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Dashboard component
export const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ZenFlow Dashboard</Typography>
          <Button color="inherit" onClick={handleClickOpen}>
            New Task
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          {tasks.map((task, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{task.taskName}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {task.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Due Date: {task.dueDate}
                  </Typography>
                  <Typography variant="h6">Steps:</Typography>
                  <ul>
                    {task.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button size="small" color="secondary">
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <TaskDialog open={open} handleClose={handleClose} addTask={addTask} />
    </div>
  );
};