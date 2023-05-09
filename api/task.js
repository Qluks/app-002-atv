import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "VdJ9B9YtM6AfdUnorPP41bGjIgCZyIAgPZdAzX7p",
    "X-Parse-REST-API-Key": "7juyTC0DAPekACLhiZtJcwge5dYWZOpFLBDMNGwZ",
  },
});

export const getTasks = () => instance.get("Task").then((res) => res.data);

export const createTask = ({description}) => {
  console.log("Descriçaõ:", description)
  return instance.post("/Task", {
    description,
    done: false,
  }, {
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    console.log(response.data);
    return response.data;
    })
    .catch((error) => {
        console.log(error);
    });
};

export const deleteTask = async (objectId) => {
  const res = await instance.delete(`/Task/${objectId}`);
  return res.data;
};

export const updateTask = (task) => {
  return instance.put(`/Task/${task.objectId}`, task, {
    headers: { "Content-Type": "application/json" },
  });
};