import { StyleSheet, Text, View, Switch, Button } from "react-native";

export const CardTask = ({ task, taskDoneChange, onDeletePress  }) => {
  const handleChange = () => {
    taskDoneChange({ objectId: task.objectId, done: !task.done });
  };
  const handleDeleteTask = (objectId) => {
    onDeletePress(objectId);
  };
  return (
    <View style={styles.container}>
      <Text>
        {task.description} - {task.done ? "feita" : "a fazer"}
      </Text>
      <Switch value={task.done} onValueChange={handleChange} />
      <Button title="Delete Task" onPress={() => handleDeleteTask(task.objectId)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "floralwhite",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
