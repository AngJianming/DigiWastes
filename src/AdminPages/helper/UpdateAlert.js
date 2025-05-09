import Swal from "sweetalert2";
import { UpdateStatusRequest } from "../APIRequest/APIRequest";

export function UpdateToDO(id, status, priority) {
    return Swal.fire({
        title: "Update Task",
        html: `
            <label for="status-select">Change Status:</label>
            <select id="status-select" class="swal2-select">
                <option value="New" ${status === "New" ? "selected" : ""}>New</option>
                <option value="Pending" ${status === "Pending" ? "selected" : ""}>Pending</option>
                <option value="Completed" ${status === "Completed" ? "selected" : ""}>Completed</option>
                <option value="Canceled" ${status === "Canceled" ? "selected" : ""}>Canceled</option>
            </select>
            <br><br>
            <label for="priority-select">Change Priority:</label>
            <select id="priority-select" class="swal2-select">
                <option value="High" ${priority === "High" ? "selected" : ""}>High</option>
                <option value="Medium" ${priority === "Medium" ? "selected" : ""}>Medium</option>
                <option value="Low" ${priority === "Low" ? "selected" : ""}>Low</option>
            </select>
        `,
        showCancelButton: true,
        confirmButtonText: "Update",
        preConfirm: () => {
            const newStatus = document.getElementById("status-select").value;
            const newPriority = document.getElementById("priority-select").value;
            return { newStatus, newPriority };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            return UpdateStatusRequest(id, result.value.newStatus, result.value.newPriority).then((res) => {
                return res;
            });
        }
    });
}
